import sys
import threading
import psycopg2
import socket
import datetime
from sklearn.neighbors import KNeighborsClassifier

TCP_IP = ''
TCP_PORT = 1883  # Porta que sera aberta para a conexao websocket
BUFFER_SIZE = 64  # Tamanho do buffer que podera ser recebido


def estatisticaIp(parametro, value_lido):
    size_vetores = 7
    indice = 0
    vetorCondicao = ['A', 'B', 'C', 'D', 'E', 'F']
    vetorIlo = [0, 51, 101, 151, 251, 351]
    vetorIhi = [50, 100, 150, 250, 350, 500]
    vetorBPloCO2 = [0, 501, 1001, 1501, 2001, 3001]
    vetorBPhiCO2 = [500, 1000, 1500, 2000, 3000, 5000]

    # Atribui parâmetros especificos

    if parametro == 'CO2':
        if (value_lido < vetorBPhiCO2[0]):
            indice = 0
        elif (value_lido < vetorBPhiCO2[1]):
            indice = 1
        elif (value_lido < vetorBPhiCO2[2]):
            indice = 2
        elif (value_lido < vetorBPhiCO2[3]):
            indice = 3
        elif (value_lido < vetorBPhiCO2[4]):
            indice = 4
        elif (value_lido < vetorBPhiCO2[5]):
            indice = 5
        elif (value_lido < vetorBPhiCO2[6]):
            indice = 6

    # atribui os valores respectivos
    BPlo = vetorBPloCO2[indice]
    BPhi = vetorBPhiCO2[indice]

    # Atribui parâmetros gerais
    condicao = vetorCondicao[indice]
    Ihi = vetorIhi[indice]
    Ilo = vetorIlo[indice]
    Cp = value_lido

    # Faz o cálculo
    Ip = (((Ihi - Ilo) / (BPhi - BPlo)) * (Cp - BPlo)) + Ilo

    return Ip;


# Faz a classificacao de pacotes vindos do AirPure
def classificatePackage(conn, addr):
    while 1:
        msg = ''
        dados = bytearray()
        fim_msg = False
        try:
            # Contabiliza todos os caracteres que estao sendo recebidos
            while not fim_msg:
                recvd = conn.recv(BUFFER_SIZE)
                if not recvd:
                    raise ConnectionError()
                    break
                dados += recvd
                if b'\n' in recvd:
                    msg = dados.rstrip(b'\n').decode('utf-8')
                    fim_msg = True
            print("\n[SERVIDOR ", addr, "] Recebidos no total ", len(dados), " bytes de ", addr)

            # Inicia a interpretacao dos dados separando o buffer recebido em um array
            comando = msg.split(' ')
            operacao = comando[0]
            # Se foi uma operacao de INSERT
            if operacao == 'INSERT':
                print(comando);
                valor = float(comando[5])
                iaqCO2 = estatisticaIp("CO2", valor)
                tvocUg = float(comando[3])*4.5
                comando[3] = str(tvocUg)

                try:
                    connection = psycopg2.connect(user="postgres",
                                                  password="10052019",
                                                  host="server01.matsoftwares.com.br",
                                                  port="5432",
                                                  database="airpure")
                    cursor = connection.cursor()

                    postgres_insert_query = """ INSERT INTO amostragens (temperatura,umidade,eco2,tvoc,co2,db,lux,id_dispositivos,iaq,data,iaq_co2) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
                    record_to_insert = (
                    comando[1], comando[2], comando[3], comando[4], comando[5], comando[6], comando[7], comando[8],
                    str(10), datetime.datetime.now(), str(iaqCO2))
                    cursor.execute(postgres_insert_query, record_to_insert)

                    connection.commit()
                    count = cursor.rowcount
                    print(count, "Registro inserido com sucesso!")

                except (Exception, psycopg2.Error) as error:
                    print("Falhou ao inserir o registro!", error)

                finally:
                    # closing database connection.
                    if connection:
                        cursor.close()
                        connection.close()
                        print("Conexao ao banco esta fechada.")


            else:
                resposta = 'ERRO'



        except BaseException as erro:
            break
    print("\n[SERVIDOR ", addr, "] Fechando a conexao ", addr)
    conn.close()


print("\n[SERVIDOR] Iniciando")

print("\n[SERVIDOR] Abrindo a porta " + str(TCP_PORT) + " e ouvindo")
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

while 1:
    conn, addr = s.accept()
    thread = threading.Thread(target=classificatePackage,
                              args=[conn, addr],
                              daemon=True)
    thread.start()

print("\n[SERVIDOR] Fechando a porta " + str(TCP_PORT))
s.close()

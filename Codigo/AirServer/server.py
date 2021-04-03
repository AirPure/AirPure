import sys
import threading
import socket
from sklearn.neighbors import KNeighborsClassifier

TCP_IP = ''
TCP_PORT = 7007     #Porta que sera aberta para a conexao websocket
BUFFER_SIZE = 64    #Tamanho do buffer que podera ser recebido

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
            print ("\n[SERVIDOR ", addr, "] Recebidos no total ", len(dados), " bytes de ", addr)

            # Inicia a interpretacao dos dados separando o buffer recebido em um array
            comando = msg.split(' ')
            operacao = comando[0]
            # Se foi uma operacao de INSERT
            if operacao == 'INSERT':
                # Definicao do algoritimo a ser utilizado
                neigh = KNeighborsClassifier(n_neighbors=3)
                # Abre o arquivo contendo todos os dados recebidos
                f = open('data_airpure.txt', 'r')

                data_all = []
                for line in f:
                    # Junta num vetor todos os valores presentes no arquivo na seguinte configuracao [[TEMPERATURA,UMIDADE,ECO2,TVOC,CO2],[TEMPERATURA,UMIDADE,ECO2,TVOC,CO2],....]
                    columns = line.split()
                    int_list = [float(i) for i in columns]
                    data_all.append([int_list[0],int_list[1],int_list[2],int_list[3],int_list[4]])

                f.close()

                # Abre o arquivo contendo os resultados previamente definidos para as amostras e também os que foram 'predictados' pelo algoritmo
                f = open('result_airpure.txt', 'r')
                result = []
                for line in f:
                    columns = line.split()
                    result.append(columns[0])

                f.close()

                # Executa o algoritmo de classificao
                neigh.fit(data_all, result)
                prediction = neigh.predict([[comando[1], comando[2], comando[3],comando[4],comando[5]]])

                # Abre o arquivo de resultados e escreve o resultado do predict
                f2 = open('result_airpure.txt', 'a')
                f2.write("\n" + str(prediction[0]))
                f2.close()

                # Abre o arquivo de amostras e escreve a amostra que acabou de receber
                f2 = open('data_airpure.txt', 'a')
                f2.write("\n" + comando[1] + " " + comando[2] + " " + comando[3] + " " + comando[4] + " " + comando[5] + " " + comando[6])
                f2.close()

                print("\n[SERVIDOR ", addr, "] Classifição dos dados executada com sucesso.")

            else:
                resposta = 'ERRO'



        except BaseException as erro:
            break
    print ("\n[SERVIDOR ", addr, "] Fechando a conexao ", addr)
    conn.close()

print ("\n[SERVIDOR] Iniciando")

print ("\n[SERVIDOR] Abrindo a porta " + str(TCP_PORT) + " e ouvindo")
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

while 1:
    conn, addr = s.accept()
    thread = threading.Thread(target=classificatePackage,
                              args=[conn, addr],
                              daemon=True)
    thread.start()

print ("\n[SERVIDOR] Fechando a porta " + str(TCP_PORT))
s.close()

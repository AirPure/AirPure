
import pandas as pd
from scipy.stats.stats import pearsonr
# help(pearsonr)
import gspread

global number_of_rows
global pontuacao_quest
pontuacao_quest: list[int] = []
global pontuacao_db
pontuacao_db: list[int] = []
global resultado
resultado = []
global resultado2

# documentação https://docs.gspread.org/en/latest/
from google.oauth2 import service_account

scopes = ["https://www.googleapis.com/auth/spreadsheets",
          "https://www.googleapis.com/auth/drive"]
json_file = "credentials.json"

def login():
    credentials = service_account.Credentials.from_service_account_file(json_file)
    scoped_credentials = credentials.with_scopes(scopes)
    gc = gspread.authorize(scoped_credentials)
    return gc

def escreveFile(number_of_rows):
    # Apaga conteúdo do arquivo
    arquivo = open('conf.txt', 'w')
    arquivo.close()
    # escreve o novo índice para referência
    arquivo = open("conf.txt", "a")
    arquivo.write(number_of_rows)
    arquivo.close()

def switchIAQ(case):
    if case == "Bom":
        print("CASE BOM")
        return 1.0
    elif case == "Regular":
        return 2.0
    elif case == "Inadequada":
        return 3.0
    elif case == "Má":
        return 4.0
    elif case == "Péssima":
        return 5.0
    elif case == "Crítica":
        return 6.0
    else:
        return 0

def switchTemp(case):
    if case == "Muito quente":
        return 1.1
    elif case == "Ligeiramente quente":
        return 1.2
    elif case == "Neutro":
        return 1.3
    elif case == "Ligeiramente frio":
        return 1.4
    elif case == "Muito frio":
        return 1.5
    else:
        return 0

def switchUmi(case):
    if case == "Muito úmido":
        return 2.1
    elif case == "Levemente úmido":
        return 2.2
    elif case == "Neutro":
        return 2.3
    elif case == "Ligeiramente seco":
        return 2.4
    elif case == "Muito seco":
        return 2.5
    else:
        return 0


# 1 Verificar último índice:
arquivo = open('conf.txt', 'r')
ultimo_index = int(arquivo.read())
print("Último índex " + str(ultimo_index))
arquivo.close()

# 2 Lê o índice atual:
gc = login()
planilha = gc.open("Formulário de percepção da qualidade do ar (respostas)")
aba = planilha.worksheet("Respostas ao formulário 1")
dados = aba.get_all_records()
df = pd.DataFrame(dados)
index = df.index
number_of_rows = len(index)
print("Index atual " + str(number_of_rows))

# 3 Checa se são iguais
if (ultimo_index == number_of_rows):
    print("Sem dados novos")
else:
    # Faz o tratamento dos novos registros
    # 3.1 Pega a faixa de datas dos novos dados
    # COlocar um for para + de 1 registro novo
    values_list = aba.row_values(number_of_rows)
    print("Quest")
    print(values_list)

    # 3.2 Pega os valores que serão utilizados do questionario
    data_quest = values_list[0]
    sala_quest = values_list[2]
    iaq_quest =  values_list[3]
    temp_quest = values_list[4]
    umid_quest = values_list[6]

    # 3.3 Pega valores do db
    data_db = 1
    sala_db = 1
    iaq_db = "Bom"
    temp_db = 1
    umid_db = 1

    # 3.4 Pontualizar dados
    pontuacao_quest = [switchIAQ(iaq_quest),switchTemp(temp_quest),switchUmi(umid_quest)]

    print("pontuação_quest " + str(pontuacao_quest))

    pontuacao_db = [switchIAQ(iaq_db), switchTemp(temp_db), switchUmi(umid_db)]
    print("pontuação_db " + str(pontuacao_db))

    resultado2 = pearsonr(pontuacao_quest, pontuacao_db)
    print("resultado " + str(resultado2))
    print("Compatibilidade "+str(round(resultado2[0]*100, 2))+" %")

    #Colocar por ultimo para escrever  no arquivo o índice atual



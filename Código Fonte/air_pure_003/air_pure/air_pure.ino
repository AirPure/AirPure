/*Bibliotecas*/
#include <PubSubClient.h>
#include <BH1750.h>
#include <DHT.h>
#include <WiFi.h>
#include <SPI.h>
#include <Adafruit_CCS811.h>

/*Definir os pinos dos sensor*/
#define dhtPin 4 //Sensor de temperatura e umidade - DHT11.
#define dbMeterPin 15 //Entrada analógica do sensor de ruído - MAX9814
#define RXD2 16 //Sensor de CO2 - MH-Z14A.
#define TXD2 17 //Sensor de CO2 - MH-Z14A.
BH1750 lightMeter (0x23); //Sensor de luminosidade - BH1750 (Addr: 0x23)


/*Configuração de sensores.*/
//DHT11 - Temperatura e Umidade.
#define dhtType DHT22 //Tipo do sensor DHT.
DHT dht(dhtPin, dhtType); //Objeto sensor de temperatura e umidade
//CSS811 - TVOC
Adafruit_CCS811 ccs; //Objeto sensor de TVOC.

//Definir variaveis globais.
float temp; //Temperatura em graus celsius.
float umid; //Umidade relativa.
uint16_t lux; //Valor em Lux referente à luminosidade.
float eco2; //Equivalente de Dióxido de carbono.
float voc; //Total de compostos organicos voláteis.
float valorCO2; //Dióxido de carbono. 
float dbLevel; //Valor em DB de ruído do ambiente

/*Configurações de rede e conexão MQTT ThingSpeak*/
char ssid[] = "XXXXXXXX"; //nome da rede. PACO Internet
char pass[] = "XXXXXXXXXX"; //senha da rede. SEM SENHA
char mqttUserName[] = "airpure"; //nome de usuário do MQTT
char mqttPass[] = "0QIMS6VELRQUUC0A"; //chave de acesso do MQTT.
char writeAPIKey[] = "9MPRYZ0YX3F8REMQ"; //chave de escrita, canal Thingspeak.
long channelID = 1177969; //Identificação do canal Thingspeak - Pessoal.

/*Definir identificação de cliente, randomico.*/
static const char alphanum[] = "0123456789""ABCDEFGHIJKLMNOPQRSTUVWXYZ""abcdefghijklmnopqrstuvwxyz";

WiFiClient client; //Inicializar cliente wifi

//Inicializar a biblioteca pubsubclient e definir o broker MQTT thingspeak.
PubSubClient mqttClient(client);
const char* server = "mqtt.thingspeak.com";

unsigned long lastConnectionTime = 0; //Tempo da última conexão.
const unsigned long postingInterval = 20000L; //Tempo de postagem, 20 segundos.
const int sampleWindow = 50; // Janela de amostragem em mS (50 mS = 20Hz)
unsigned int sample;

void setup() {
  Serial.begin(115200); //Iniciar porta serial - USB.
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); //Iniciar porta serial - UART.
  int status = WL_IDLE_STATUS; //Estado da conexão wifi.

  //Inicializar sensor CCS811.
  if(!ccs.begin()){
    Serial.println("Falha ao iniciar o CCS811! Checar conexão dos fios.");
    while(1);
  }
  
  dht.begin(); //Inicializar DHT11.
  lightMeter.begin();
  
  pinMode(dhtPin, INPUT); //Configurar modo dos pinos.
   pinMode(dbMeterPin, INPUT); //Configurar modo dos pinos.
  
  /*Conectar a rede wifi*/
  while(status != WL_CONNECTED){
    status = WiFi.begin(ssid, pass); //Conectar a rede WiFi WPA/WPA2.
    delay(5000);
    }
  Serial.print("Conectado ao WiFi: "); //Imprimir nome da rede conectada.
  Serial.println(ssid);
  
  mqttClient.setServer(server, 1883); //Configurar Broker MQTT - ThingSpeak.
}

void loop() {
  //Conectar MQTT.
  if(!mqttClient.connected()){
    reconnect();
    }

  mqttClient.loop(); //Manter conexão MQTT.

  //Enviar dados.
  if(millis() - lastConnectionTime > postingInterval){
    mqttpublish();
    }
}

//Faz o map de valores, retornando floats (Necessário pois o map nativo retorna apenas inteiros).
float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


float readDb(){

   unsigned long startMillis= millis();  // Inicio da janela de amostragem
   unsigned int peakToPeak = 0;   // Nível pico a pico

   unsigned int signalMax = 0;  //Valor análogico mínimo
   unsigned int signalMin = 1024;  //Valor analógico máximo

   // Coleta dados por aproximadamente 50ms
   while (millis() - startMillis < sampleWindow)
   {
      sample = analogRead(dbMeterPin); //Faz a leitura analógica do MAX9814
      if (sample < 1024) 
      {
         if (sample > signalMax)
         {
            signalMax = sample;  // Salva apenas os valores máximos
         }
         else if (sample < signalMin)
         {
            signalMin = sample;  // Salva apenas os valores mínimos
         }
      }
   }
   peakToPeak = signalMax - signalMin;  // Máximo - Mínimo = Amplitude pico a pico
   double volts = (peakToPeak * 3.0) / 1024;  // Converte para um valor de tensao aproximado

   
   
   if (volts <= 5){ //Valor máximo possível 
      float value = mapfloat(volts, 0.00, 3.00, 37.00, 82.00);
      return value;
    
   } else {
      return 37;
   }

}


//Leitura da concentração de gás - MH-Z14A.
float leituraGas(){

  const byte comando[9] =  {0xFF, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79}; //Comando de leitura da concentração de gás.
  byte resposta[9]; //Armazena a resposta do comando de leitura.

  //Escrever comando de leitura.
  for(int i = 0; i<9; i++){
    Serial2.write(comando[i]);
    }

  delay(30);

  //Ler retorno do comando de leitura.
  if(Serial2.available()){
    for(int i=0; i<9; i++){
      resposta[i] = Serial2.read();
      }
    int alto = (int)resposta[2];
    int baixo = (int)resposta[3];

    float CO2 = ((alto*256)+baixo); //Concentração de CO2 em ppm, referência datasheet.

    return CO2;
  }
}

//Conectar ao Broker MQTT.
void reconnect(){
  char clientID[9]; //Identificação do cliente.

  //Gerar ID do cliente.
  while(!mqttClient.connected()){
    Serial.print("Tentando conexão MQTT...");
    for(int i=0; i<8; i++){
      clientID[i] = alphanum[random(100)];
      }
  clientID[8] = '\0';

  //Iniciar conexão MQTT.
  if(mqttClient.connect(clientID, mqttUserName, mqttPass)){
    Serial.println("Conectado.");
    }else{
      Serial.print("Failed, rc= ");
      /*Verificar o porque ocorreu a falha.*/
      //Ver em: https://pubsubclient.knolleary.net/api.html#state explicação do código da falha.
      Serial.print(mqttClient.state());
      Serial.println("Tentar novamente em 5 segundos.");
      delay(5000);
      }
   }
 }

 //Publicar dados ThingSpeak.
 void mqttpublish(){
 //Leitura dos valores.
  //DHT11 - Temperatura e Umidade.
  temp = dht.readTemperature(); //Ler temperatura - DHT11.
  umid = dht.readHumidity(); //Ler umidade - DHT11.
  lux = lightMeter.readLightLevel(); //Ler luminosidade - BH1750.
  dbLevel = readDb();
  
  //Verifica se a leitura não um número.
  if(isnan(umid) || isnan(temp)){
  Serial.println("Erro de leitura DHT11!");
  return;
  }

  //Verifica se a leitura não um número.
  if(isnan(lux)){
  Serial.println("Erro de leitura BH1750!");
  return;
  }
  

  //CCS811 - TVOC
   if(ccs.available()){
    if(!ccs.readData()){
      eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
      voc = ccs.getTVOC(); //Ler TVOC - CCS811.
    }else{
      Serial.println("Erro de leitura CCS811!");
      while(1);
    }
  }

  valorCO2 = leituraGas(); //Concentração de CO2 - MH-Z14A.
  
  //String de dados para enviar a Thingspeak.
  String dados = String("field1=" + String(temp, 2) + "&field2=" + String(umid, 2) + "&field3=" +String(eco2, 2)+ "&field4=" +String(voc, 2)+ "&field5=" + String(valorCO2)+ "&field6=" + String(lux,5)+ "&field7=" + String(dbLevel,2));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer,tamanho+1);
  Serial.println(msgBuffer);

  //Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID) + "/publish/"+String(writeAPIKey);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho+1);

  mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.

  lastConnectionTime = millis();
  }

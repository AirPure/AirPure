/*Bibliotecas*/
#include <PubSubClient.h>
#include <WiFiManager.h>         
#include <BH1750.h>
#include <DHT.h>
#include <WiFi.h>
#include <SPI.h>
#include <Adafruit_CCS811.h>


/*Definir os pinos dos sensor*/
#define dhtPin 4 //Sensor de temperatura e umidade - DHT22.
#define dbMeterPin 34 //Entrada analógica do sensor de ruído - MAX9814
#define RXD2 16 //Sensor de CO2 - MH-Z14A.
#define TXD2 17 //Sensor de CO2 - MH-Z14A.
BH1750 lightMeter (0x23); //Sensor de luminosidade - BH1750 (Addr: 0x23)


/*Configuração de sensores.*/
//DHT22 - Temperatura e Umidade.
#define dhtType DHT22 //Tipo do sensor DHT.
DHT dht(dhtPin, dhtType); //Objeto sensor de temperatura e umidade
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
char ssid[] = "XXXX"; //nome da rede. PACO Internet
char pass[] = "XXXXX"; //senha da rede. SEM SENHA
char mqttUserName[] = "airpure"; //nome de usuário do MQTT
char mqttPass[] = "0QIMS6VELRQUUC0A"; //chave de acesso do MQTT.
char writeAPIKey[] = "WDPPXX2EI7II24E0"; //chave de escrita, canal Thingspeak.
long channelID = 1160801; //Identificação do canal Thingspeak - Pessoal.


/*Definir identificação de cliente, randomico.*/
static const char alphanum[] = "0123456789""ABCDEFGHIJKLMNOPQRSTUVWXYZ""abcdefghijklmnopqrstuvwxyz";

WiFiClient client; //Inicializar cliente wifi

//Inicializar a biblioteca pubsubclient e definir o broker MQTT thingspeak.
PubSubClient mqttClient(client);
const char* server = "mqtt.thingspeak.com";

unsigned long lastConnectionTime = 0; //Tempo da última conexão.
const unsigned long postingInterval = 20000L; //Tempo de postagem, 20 segundos.
const int sampleWindow = 50; // Janela de amostragem em mS (50 mS = 20Hz)
unsigned int sample;  //Variável referente a leitura do sensor de ruído

void setup() {
  Serial.begin(115200); //Iniciar porta serial - USB.
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); //Iniciar porta serial - UART.
  int status = WL_IDLE_STATUS; //Estado da conexão wifi.

  //Inicializar sensor CCS811.
  if(!ccs.begin()){
    Serial.println("Falha ao iniciar o CCS811! Checar conexão dos fios.");
    delay(1000);
    ESP.restart();
  }
  
  dht.begin(); //Inicializar DHT22.
  lightMeter.begin(); //Inicilizar o BH1750.
  
  pinMode(dhtPin, INPUT); //Configurar modo dos pinos do DHT.
  pinMode(dbMeterPin, INPUT); //Configurar modo dos pinos do MAX9814.
  
  /*
  Serial.print("Tentando se conectar...");
  while(status != WL_CONNECTED){
  Serial.print(".");
  status = WiFi.begin(ssid, pass); //Conectar a rede WiFi WPA/WPA2.
  delay(2000);
  }
 */
 
  //WiFiManager
  WiFiManager wifiManager;
  wifiManager.setTimeout(80);  //Timeout de 1 minuto e 20 segundos

  //Deixa a configuração quando esta é finalizada
  wifiManager.setBreakAfterConfig(true);

  //Tenta conectar com o último SSID conhecido
  //Se não conseguir, abre um AP para ser configurado
  //SSID do AP: AiPure  Senha: 12345678
  //and goes into a blocking loop awaiting configuration
  if (!wifiManager.autoConnect("AirPure", "12345678")) {
    Serial.println("Falhou para se conectar... Reiniciando.");
    delay(3000);
    ESP.restart();
    delay(5000);
  }
  
  /*
  Serial.print("Conectado ao WiFi: "); //Imprimir nome da rede conectada.
  Serial.println(ssid);
  */

  Serial.println("Wifi conectado com sucesso!");
  
  mqttClient.setServer(server, 1883); //Configurar Broker MQTT - ThingSpeak.
}

void loop() {
  
  //Conectar MQTT.
  if(!mqttClient.connected()){
    reconnect();
  }

  mqttClient.loop(); //Manter conexão MQTT.

  mqttpublish();  //Função para manter a leitura constante dos sensores.
  delay(1000);    //Delay de 1s.

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
   if (volts <= 1000){ //Filtra possíveis valores residuais 
      float value = mapfloat(volts, 0.00, 3.00, 37.00, 82.00);
      return value; //Retorna o valor convertido para dB
   } else {
      return 37; //Caso seja residual, retorna o menor valor possível
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
      Serial.print("Conexão falhou! Código de erro: ");
      Serial.print(mqttClient.state());
      Serial.print("O sistema irá reiniciar.");
      delay(1000);
      ESP.restart();
      }
   }
}

 //Leitura e publicação dos dados para o ThingSpeak.
 void mqttpublish(){
  //Leitura dos valores.
  
  //MAX9814 - Ruído
  dbLevel = readDb();
  
  //DHT22 - Temperatura e Umidade.
  temp = dht.readTemperature(); //Ler temperatura - DHT22.
  umid = dht.readHumidity(); //Ler umidade - DHT22.

  //BH1750 - Luminosidade
  lux = lightMeter.readLightLevel(); //Ler luminosidade - BH1750.


  //CCS811 - TVOC
   if(ccs.available()){
    if(!ccs.readData()){
      eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
      voc = ccs.getTVOC(); //Ler TVOC - CCS811.
    }else{
      Serial.println("Erro de leitura CCS811!");
      return;
    }
  }

  //MHZ-14A - CO2
  valorCO2 = leituraGas(); //Concentração de CO2 - MH-Z14A.
  
  //String de dados para enviar a Thingspeak.
  String dados = String("field1=" + String(temp, 2) + "&field2=" + String(umid, 2) + "&field3=" +String(eco2, 2)+ "&field4=" +String(voc, 2)+ "&field5=" + String(valorCO2)+ "&field6=" + String(lux,5)+ "&field7=" + String(dbLevel,2));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer,tamanho+1);
  
  //Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID) + "/publish/"+String(writeAPIKey);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho+1);

  //Se tiver passado o tempo de intervalo de amostragem, faz o envio. Caso contrário, não faz nada.
  if(millis() - lastConnectionTime > postingInterval){
      Serial.println("Hora de enviar!");
      Serial.println(msgBuffer);
      int r = mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.
      if (r){
        Serial.println("Envio feito com sucesso!");
      } else {
        Serial.println("Envio não foi feito!");
        Serial.println("Resetando para evitar que isto aconteça novamente.");
        delay(1000);
        ESP.restart();
      }
      lastConnectionTime = millis();
  }

}

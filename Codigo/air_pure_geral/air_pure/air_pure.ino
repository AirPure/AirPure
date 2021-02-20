/*Bibliotecas*/
#include <PubSubClient.h>
#include <WiFiManager.h>         
#include <BH1750.h>
#include <DHT.h>
#include <WiFi.h>
#include <esp_now.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_CCS811.h>
#include <i2cdetect.h>
#include <WiFiClientSecure.h>
#include <UniversalTelegramBot.h>
#include <ArduinoJson.h>
#include <NTPClient.h>
#include <WiFiUdp.h>
#include <Arduino.h>
#include "ArduinoNvs.h"
#include <ArduinoOTA.h>
#include <HTTPClient.h>
#include <ESPmDNS.h>
#include <esp32fota.h>

const char * root_ca=\
"-----BEGIN CERTIFICATE-----\n" \
"MIIDujCCAqKgAwIBAgILBAAAAAABD4Ym5g0wDQYJKoZIhvcNAQEFBQAwTDEgMB4G\n" \
"A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjIxEzARBgNVBAoTCkdsb2JhbFNp\n" \
"Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDYxMjE1MDgwMDAwWhcNMjExMjE1\n" \
"MDgwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEG\n" \
"A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI\n" \
"hvcNAQEBBQADggEPADCCAQoCggEBAKbPJA6+Lm8omUVCxKs+IVSbC9N/hHD6ErPL\n" \
"v4dfxn+G07IwXNb9rfF73OX4YJYJkhD10FPe+3t+c4isUoh7SqbKSaZeqKeMWhG8\n" \
"eoLrvozps6yWJQeXSpkqBy+0Hne/ig+1AnwblrjFuTosvNYSuetZfeLQBoZfXklq\n" \
"tTleiDTsvHgMCJiEbKjNS7SgfQx5TfC4LcshytVsW33hoCmEofnTlEnLJGKRILzd\n" \
"C9XZzPnqJworc5HGnRusyMvo4KD0L5CLTfuwNhv2GXqF4G3yYROIXJ/gkwpRl4pa\n" \
"zq+r1feqCapgvdzZX99yqWATXgAByUr6P6TqBwMhAo6CygPCm48CAwEAAaOBnDCB\n" \
"mTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUm+IH\n" \
"V2ccHsBqBt5ZtJot39wZhi4wNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL2NybC5n\n" \
"bG9iYWxzaWduLm5ldC9yb290LXIyLmNybDAfBgNVHSMEGDAWgBSb4gdXZxwewGoG\n" \
"3lm0mi3f3BmGLjANBgkqhkiG9w0BAQUFAAOCAQEAmYFThxxol4aR7OBKuEQLq4Gs\n" \
"J0/WwbgcQ3izDJr86iw8bmEbTUsp9Z8FHSbBuOmDAGJFtqkIk7mpM0sYmsL4h4hO\n" \
"291xNBrBVNpGP+DTKqttVCL1OmLNIG+6KYnX3ZHu01yiPqFbQfXf5WRDLenVOavS\n" \
"ot+3i9DAgBkcRcAtjOj4LaR0VknFBbVPFd5uRHg5h6h+u/N5GJG79G+dwfCMNYxd\n" \
"AfvDbbnvRG15RjF+Cv6pgsH/76tuIMRQyV+dTZsXjAzlAcmgQWpzU/qlULRuJQ/7\n" \
"TBj0/VLZjmmx6BEP3ojY+x1J96relc8geMJgEtslQIxq/H5COEBkEveegeGTLg==\n" \
"-----END CERTIFICATE-----\n";



char* test_root_ca= \
     "-----BEGIN CERTIFICATE-----\n"  
  "MIIDxTCCAq2gAwIBAgIQAqxcJmoLQJuPC3nyrkYldzANBgkqhkiG9w0BAQUFADBsMQswCQYDVQQG\n"  
  "EwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSsw\n"  
  "KQYDVQQDEyJEaWdpQ2VydCBIaWdoIEFzc3VyYW5jZSBFViBSb290IENBMB4XDTA2MTExMDAwMDAw\n"  
  "MFoXDTMxMTExMDAwMDAwMFowbDELMAkGA1UEBhMCVVMxFTATBgNVBAoTDERpZ2lDZXJ0IEluYzEZ\n"  
  "MBcGA1UECxMQd3d3LmRpZ2ljZXJ0LmNvbTErMCkGA1UEAxMiRGlnaUNlcnQgSGlnaCBBc3N1cmFu\n"  
  "Y2UgRVYgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMbM5XPm+9S75S0t\n"  
  "Mqbf5YE/yc0lSbZxKsPVlDRnogocsF9ppkCxxLeyj9CYpKlBWTrT3JTWPNt0OKRKzE0lgvdKpVMS\n"  
  "OO7zSW1xkX5jtqumX8OkhPhPYlG++MXs2ziS4wblCJEMxChBVfvLWokVfnHoNb9Ncgk9vjo4UFt3\n"  
  "MRuNs8ckRZqnrG0AFFoEt7oT61EKmEFBIk5lYYeBQVCmeVyJ3hlKV9Uu5l0cUyx+mM0aBhakaHPQ\n"  
  "NAQTXKFx01p8VdteZOE3hzBWBOURtCmAEvF5OYiiAhF8J2a3iLd48soKqDirCmTCv2ZdlYTBoSUe\n"  
  "h10aUAsgEsxBu24LUTi4S8sCAwEAAaNjMGEwDgYDVR0PAQH/BAQDAgGGMA8GA1UdEwEB/wQFMAMB\n"  
  "Af8wHQYDVR0OBBYEFLE+w2kD+L9HAdSYJhoIAu9jZCvDMB8GA1UdIwQYMBaAFLE+w2kD+L9HAdSY\n"  
  "JhoIAu9jZCvDMA0GCSqGSIb3DQEBBQUAA4IBAQAcGgaX3NecnzyIZgYIVyHbIUf4KmeqvxgydkAQ\n"  
  "V8GK83rZEWWONfqe/EW1ntlMMUu4kehDLI6zeM7b41N5cdblIZQB2lWHmiRk9opmzN6cN82oNLFp\n"  
  "myPInngiK3BD41VHMWEZ71jFhS9OMPagMRYjyOfiZRYzy78aG6A9+MpeizGLYAiJLQwGXFK3xPkK\n"  
  "mNEVX58Svnw2Yzi9RKR/5CYrCsSXaQ3pjOLAEFe4yHYSkVXySGnYvCoCWw9E1CAx2/S6cCZdkGCe\n"  
  "vEsXCS+0yx5DaMkHJ8HSXPfqIbloEpw8nL+e/IBcm2PN7EeqJSdnoDfzAIJ9VNep+OkuE6N36B9K\n" 
  "-----END CERTIFICATE-----\n" ;

/*Definição*/
#define dhtPin 4 //Sensor de temperatura e umidade - DHT22.
#define dbMeterPin 34 //Entrada analógica do sensor de ruído - MAX9814
#define RXD2 16 //Sensor de CO2 - MH-Z14A.
#define TXD2 17 //Sensor de CO2 - MH-Z14A.
#define uS_TO_S_FACTOR 1000000  /* Fator de conversao de microsegundos para segundos */
#define TIME_TO_SLEEP  60        /* Tempo de sleep do ESP32 em segundos */
#define BTKEN "1403262308:AAF1zrbdz0-rEyXTdJUdT20MhA0eBpCT_TQ"  // Token do seu BOT do telegram.
#define CHAT_ID "1248387297"  //Seu ID no telegram.
#define dhtType DHT22 //Tipo do sensor DHT.
#define CCS811_ADDR 0x5A //Endereço I2C padrão
#define mqtt_server "189.63.21.229"
#define gatewayNodeMode 0
#define isReceiver 0
#define isGateway 0
#define V_FIRMWARE 2

/*Declaração*/
BH1750 lightMeter (0x23); //Sensor de luminosidade - BH1750 (Addr: 0x23)
WiFiClientSecure client2; //Inicializar cliente wifi
WiFiClient client; //Inicializar cliente wifi
UniversalTelegramBot bot(BTKEN, client2); //Instanciando bot do telegram
WiFiUDP ntpUDP; //NTP-UDP
NTPClient timeClient(ntpUDP);//Cliente NTP
DHT dht(dhtPin, dhtType); //Objeto sensor de temperatura e umidade
PubSubClient mqttClient(client);  //ThingSpeak
PubSubClient mqttClient2(client); //HomeAssistant
secureEsp32FOTA secureEsp32FOTA("esp32-fota-https", V_FIRMWARE);
Adafruit_CCS811 ccs; //Objeto sensor de TVOC. //Instância do CCS811

/*Variáveis*/
float temp; //Temperatura em graus celsius.
float umid; //Umidade relativa.
uint16_t lux; //Valor em Lux referente à luminosidade.
float eco2, eco2Sum; //Equivalente de Dióxido de carbono.
float voc, vocSum; //Total de compostos organicos voláteis.
float valorCO2; //Dióxido de carbono. 
float dbLevel; //Valor em DB de ruído do ambiente
int highCO2 = 0; //Flag de alto indice de CO2.
int timeOutReading = 30;  //Timeout de leitura
int timeoutHorario = 30;  //Timeout para obter hora
int r = 0; //Variável de retorno de funções
String formattedDate; //String para receber o horário.
int isWaitingForOta = 0; //Flag que houve uma conexao via OTA.
char mqttUserName[] = "airpure"; //nome de usuário do MQTT
char mqttPass[] = "0QIMS6VELRQUUC0A"; //chave de acesso do MQTT.
char homeassistant_mqtt_user[] = "airpure"; //nome de usuário do MQTT
char homeassistant_mqtt_pass[] = "airpure"; //chave de acesso do MQTT.
String writeAPIKey[3] = {"WDPPXX2EI7II24E0","EB6J5ATU4ETP7984","W1OE6ARR4S0X2OAT"}; //chave de escrita, canal Thingspeak.
String GOOGLE_SCRIPT_ID[3] = {"AKfycbyTjkzdpp9rY3XtslFZvW5jxvUnXPAYHTeV4eMmk4uSXMNe5DXV","AKfycbyc1aXXiS_7kK6o7It_4Bit2T4Y8Ub1Un-ofFATPdNSCKDwmmz6","AKfycbyLI0hLaPGFe7XIY6012YkjHCZeKCEcrg0FifhmsBEY2QaRXszV"}; //Google Sheets
long channelID[3] = {1160801,1167146,1177969}; //Identificação do canal Thingspeak - Pessoal.
static const char alphanum[] = "0123456789""ABCDEFGHIJKLMNOPQRSTUVWXYZ""abcdefghijklmnopqrstuvwxyz"; //Definir identificação de cliente, randomico.
const char* server = "mqtt.thingspeak.com"; //Servidor do MQTT para o ThingSpeak
String umidade_topic = "sensor/umidade/";  //Topicos do MQTT para o HomeAssistant
String temperatura_topic = "sensor/temperatura/";  //Topicos do MQTT para o HomeAssistant
String tvoc_topic = "sensor/tvoc/";  //Topicos do MQTT para o HomeAssistant
String co2_topic = "sensor/co2/";  //Topicos do MQTT para o HomeAssistant
String eco2_topic = "sensor/eco2/";  //Topicos do MQTT para o HomeAssistant 
String ruido_topic = "sensor/ruido/";  //Topicos do MQTT para o HomeAssistant
String luminosidade_topic = "sensor/lux/";  //Topicos do MQTT para o HomeAssistant
unsigned long lastConnectionTime = 0; //Tempo da última conexão.
const unsigned long postingInterval = 20000L; //Tempo de postagem, 20 segundos.
const int sampleWindow = 50; // Janela de amostragem em mS (50 mS = 20Hz)
unsigned int sample;  //Variável referente a leitura do sensor de ruído
String input;
int AIRPURE_ID;  //Seu ID do airpure

/*Tasks*/
TaskHandle_t task_low;
void vLow(void *pvParameters);
void vLow(void *pvParameters){
    while (true){
      //Atualiza estado do OTA.
      ArduinoOTA.handle();
      vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

TaskHandle_t task_low_serial;
void vLowSerial(void *pvParameters);
void vLowSerial(void *pvParameters){
    while (true){
      if(Serial.available()){
        input = Serial.readStringUntil('\n');
        Serial.println(input);
        if(input.equals("setid")){
        input = "";
        while(input.equals(""))
          input = Serial.readStringUntil('\n');

        NVS.setString("id", input);
        Serial.println("ID do Airpure definido: " + input);
        ESP.restart();
        
        
          
          
        }
        if(input.equals("help")){
          Serial.println("~~~~~~~~~~~~~~~AirPure - POWERED BY UFG~~~~~~~~~~~~~~~");
          Serial.println("Lista de comandos disponiveis:");
          Serial.println("'setid': Define o ID do AirPure.");
          Serial.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        }
     }
      vTaskDelay(pdMS_TO_TICKS(100));
    }
}

/*Configuração OTA*/
void configureOta(){
    ArduinoOTA
  .onStart([]() {
    String type;
    if (ArduinoOTA.getCommand() == U_FLASH)
      type = "sketch";
    else // U_SPIFFS
      type = "filesystem";
    // NOTE: if updating SPIFFS this would be the place to unmount SPIFFS using SPIFFS.end()
    Serial.println("Iniciando: " + type);
  })
  .onEnd([]() {
    Serial.println("Código foi carregado com sucesso!");
  })
  .onProgress([](unsigned int progress, unsigned int total) {
    Serial.printf(".");
    isWaitingForOta = 1;
  })
  .onError([](ota_error_t error) {
    Serial.printf("Error[%u]: ", error);
    if (error == OTA_AUTH_ERROR) Serial.println("Autenticação falhou");
    else if (error == OTA_BEGIN_ERROR) Serial.println("Início falhou");
    else if (error == OTA_CONNECT_ERROR) Serial.println("Conexão falhou");
    else if (error == OTA_RECEIVE_ERROR) Serial.println("Recebimento falhou");
    else if (error == OTA_END_ERROR) Serial.println("Finalização falhou");
  });
  ArduinoOTA.begin();
  Serial.print("OTA Ativado. Endereço de IP: ");
  Serial.println(WiFi.localIP());

}

/*Faz o envio dos registros para uma tabela*/
void sendData(String params) {
  HTTPClient http;
  String url="https://script.google.com/a/discente.ufg.br/macros/s/"+GOOGLE_SCRIPT_ID[AIRPURE_ID-1]+"/exec?"+params;
  Serial.print(url);
  Serial.print("Fazendo requisição ");
  http.begin(url, root_ca); //Specify the URL and certificate
  int httpCode = http.GET();  
  http.end();
  Serial.println(": Finalizado: "+httpCode);
}

/*ESPNOW*/
// MACADDRESS do gateway
uint8_t broadcastAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};

typedef struct struct_message {
  float a;
  float b;
  int c;
  int d;
  int e;
  int f;
  int g;
  int h;
  String i;
} struct_message;

struct_message myData;

// Callback de quando a função é  chamada
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nÚltimo pacote:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Entregue" : "Falhou ao ser entregue");
}

// callback function that will be executed when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData));


 //WiFiManager
  WiFi.disconnect(true);
  delay(1000);
  WiFi.mode(WIFI_STA);
  delay(1000);


  WiFiManager wifiManager;
  WiFi.setAutoConnect(true);
  wifiManager.setTimeout(80);
  wifiManager.setBreakAfterConfig(true);
  wifiManager.setConfigPortalTimeout(80);

  //Tenta conectar com o último SSID conhecido
  //Se não conseguir, abre um AP para ser configurado
  //SSID do AP: AiPure  Senha: 12345678
  if(!wifiManager.autoConnect("AirPure WIFI", "12345678")) {
  Serial.println("Falhou para se conectar... Reiniciando.");
    delay(100);
    if (isWaitingForOta == 0){ESP.restart();}
  }
  Serial.println("Wifi conectado com sucesso!");  


  //Configurar Broker MQTT - ThingSpeak.
  mqttClient.setServer(server, 1883); 

  //Conectar MQTT.
  if(!mqttClient.connected()){
    reconnect();
  }

  temp = myData.a;
  umid = myData.b;
  eco2 = myData.c;
  voc = myData.d;
  valorCO2 = myData.e;
  lux = myData.f;
  

 //String de dados para enviar a Thingspeak.
  String dados = String("field1=" + String(myData.a, 2) + "&field2=" + String(myData.b, 2) + "&field3=" +String(myData.c, 2)+ "&field4=" +String(myData.d, 2)+ "&field5=" + String(myData.e)+ "&field6=" + String(myData.f,5)+ "&field7=" + String(myData.g,2)+ "&field8=" + String(0));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer,tamanho+1);
  
  //Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID[myData.h-1]) + "/publish/"+String(myData.i);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho+1);

  //Se tiver passado o tempo de intervalo de amostragem, faz o envio. Caso contrário, não faz nada.
 // if(millis() - lastConnectionTime > postingInterval){
  Serial.println("Hora de enviar!");
  Serial.println(msgBuffer);

  int r = mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.
  
  if (r){
    Serial.println("Envio feito com sucesso!");
  } else {
    Serial.println("Envio não foi feito!");
    Serial.println("Resetando para evitar que isto aconteça novamente.");
    delay(1000);
    if (isWaitingForOta == 0){ESP.restart();}
  }
  lastConnectionTime = millis();
  delay(3000);  //Delay para término do envio
  mqttClient.disconnect(); //Finaliza conexão após envio para tentar conexão com o Home-assistant
  delay(1000); //Delay de 1s
  mqttClient2.setServer(mqtt_server, 1883); //Configurar Broker MQTT - Home-assistant.

  //Conectar MQTT - HomeAssistant.
  if(!mqttClient2.connected()){
    reconnect2();
  }
  
  mqttClient2.loop(); //Manter conexão MQTT.
  if(!mqttClient2.connected()){
    Serial.println("Não foi possível publicar ao Home-assistant!");
  } else {
     homeassistant_publish();
  }
 
  delay(3000);  //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
  mqttClient2.disconnect();

  Serial.println("Fazendo o envio para o Google Sheets.");
  sendData(String("Temperatura=" + String(temp, 2) + "&Umidade=" + String(umid, 2) + "&eCO2=" +String(eco2, 2)+ "&TVOC=" +String(voc, 2)+ "&CO2=" + String(valorCO2)+ "&Lux=" + String(lux,5)+ "&Ruido=" + String(dbLevel,2)+ "&Alarme=" + String(highCO2,2) + "&ID=" + String(AIRPURE_ID)));
  Serial.println("Envio executado. Um novo envio será feito em um minuto.");

  delay(3000);  //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
  
  ESP.restart();





  
}


/*Setup*/
void setup() {
  Serial.begin(115200); //Iniciar porta serial - USB.
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); //Iniciar porta serial - UART.
  int status = WL_IDLE_STATUS; //Estado da conexão wifi.
  pinMode(dhtPin, INPUT); //Configurar modo dos pinos do DHT.
  pinMode(dbMeterPin, INPUT); //Configurar modo dos pinos do MAX9814.
  Wire.begin();
  NVS.begin();

  AIRPURE_ID = NVS.getString("id").toInt(); 
  Serial.println("ID AIRPURE: " + String(AIRPURE_ID));
  
  //Cria task que mantem a atualização do OTA.
  xTaskCreate(vLowSerial,"vLowSerial",10000,NULL,0,&task_low_serial);
  i2cdetect();  // default range from 0x03 to 0x77
  delay(2000);
  
#if gatewayNodeMode == 1
  //Inicializa ESPNOW
  WiFi.mode(WIFI_STA);
  if (esp_now_init() != ESP_OK) {
    Serial.println("Erro ao inicializar ESP-NOW");
    return;
  }
  
  esp_now_register_send_cb(OnDataSent);
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;
    
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Falhou ao adicionar gateway.");
    return;
  }
#endif

#if isGateway == 1
 WiFi.mode(WIFI_STA);

  if (esp_now_init() != ESP_OK) {
    Serial.println("Erro ao iniciar o ESP-NOW");
    return;
  }

  esp_now_register_recv_cb(OnDataRecv);

#endif

  
}

/*Loop*/
void loop() {
  #if isGateway == 0
  mqttpublish();  //Leitura dos sensores e envio.

  #if gatewayNodeMode == 0
  delay(3000);  //Delay para término do envio
  mqttClient.disconnect(); //Finaliza conexão após envio para tentar conexão com o Home-assistant
  delay(1000); //Delay de 1s
  mqttClient2.setServer(mqtt_server, 1883); //Configurar Broker MQTT - Home-assistant.

  //Conectar MQTT - HomeAssistant.
  if(!mqttClient2.connected()){
    reconnect2();
  }
  
  mqttClient2.loop(); //Manter conexão MQTT.
  if(!mqttClient2.connected()){
    Serial.println("Não foi possível publicar ao Home-assistant!");
  } else {
     homeassistant_publish();
  }
 
  delay(3000);  //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
  mqttClient2.disconnect();

  Serial.println("Fazendo o envio para o Google Sheets.");
  sendData(String("Temperatura=" + String(temp, 2) + "&Umidade=" + String(umid, 2) + "&eCO2=" +String(eco2, 2)+ "&TVOC=" +String(voc, 2)+ "&CO2=" + String(valorCO2)+ "&Lux=" + String(lux,5)+ "&Ruido=" + String(dbLevel,2)+ "&Alarme=" + String(highCO2,2) + "&ID=" + String(AIRPURE_ID)));
  Serial.println("Envio executado. Um novo envio será feito em um minuto.");

  delay(3000);  //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.

  secureEsp32FOTA._host="raw.githubusercontent.com"; //e.g. example.com
  secureEsp32FOTA._descriptionOfFirmwareURL="/AirPure/AirPure/main/Codigo/air_pure_geral/air_pure/firmware.json"; 
  secureEsp32FOTA._certificate=test_root_ca;
  secureEsp32FOTA.clientForOta=client2;

  bool shouldExecuteFirmwareUpdate=secureEsp32FOTA.execHTTPSCheck();
  if(shouldExecuteFirmwareUpdate)
  {
    Serial.println("Firmware update available!");
    secureEsp32FOTA.executeOTA();
  }


  
  //Delay de um minuto para a próxima amostragem
  for(int timeoutOTA = 60; timeoutOTA > 0; timeoutOTA--){
    delay(1000);
    Serial.print(".");
  }
  #endif  //isGatewayNodeMode
  if (isWaitingForOta == 0){ESP.restart();}  //Resetando para iniciar uma nova amostragem
  #endif //isGateway

  
 
}

//Faz o map de valores, retornando floats (Necessário pois o map nativo retorna apenas inteiros).
float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/*Leitura de ruído*/
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


/*Leitura da concentração de gás - MH-Z14A.*/
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

    if(CO2 >= 65535){
      CO2 = 400; //Caso o valor bata o fundo de escala (comum no processo de warm-up do sensor), envia o valor base de CO2 em ppm.
    }
    
    return CO2;
  }
}

/*Conectar ao Broker MQTT.*/
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
      if (isWaitingForOta == 0){ESP.restart();}
      }
   }
}

/*Conectar ao Broker MQTT - Home-Assistant.*/
void reconnect2() {

    Serial.print("Tentando se conectar ao Home-assistant.");
    if (mqttClient2.connect("ESP32", homeassistant_mqtt_user, homeassistant_mqtt_pass)) {
      Serial.println("Conectado.");
    } else {
      Serial.print("Conexão falhou. Código de erro: ");
      Serial.print(mqttClient2.state());
      Serial.println("Prosseguindo.");
    }
  
}

/*Leitura e publicação dos dados para o ThingSpeak.*/
 void mqttpublish(){

  //Leitura dos valores.
  Serial.println("Iniciando leitura dos sensores.");

  //Inicializar sensor CCS811.
  Serial.println("Iniciando o CCS811...");
    if(!ccs.begin())
  {
    Serial.println("CCS811 não foi iniciado!");
  } else {
    Serial.println("CCS811 iniciado!");
  }
  Serial.println("Aquecendo CCS811...");
  eco2 = 0;
  eco2Sum = 0;
  vocSum = 0;
  voc = 0;
  for (int i = 0; i < 10; i++){
   if(ccs.available()){
    if(!ccs.readData()){
      eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
      voc = ccs.getTVOC(); //Ler TVOC - CCS811.
      //Serial.println("eCO2: " + String(eco2) + " ppm| TVOC: " + String(voc) + " ppb");
    }else{
      Serial.println("Erro de leitura CCS811!");

    }
  }
  delay(1000);
  }
  Serial.println("Lendo TVOC...");
    for (int i = 0; i < 20; i++){
   if(ccs.available()){
    if(!ccs.readData()){
      eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
      voc = ccs.getTVOC(); //Ler TVOC - CCS811.
      vocSum += voc;
      eco2Sum += eco2;
      //Serial.println("eCO2: " + String(eco2) + " ppm| TVOC: " + String(voc) + " ppb");
    }else{
      Serial.println("Erro de leitura CCS811!");

    }
  }
  delay(1000);
  }
  //Media dos valores...
  eco2 = eco2Sum/20;
  voc = vocSum/20;

  if (eco2 > 10000 || voc > 10000){
    eco2 = 400;
    voc = 0;
  }

  //Serial.println("eCO2: " + String(eco2) + " ppm| TVOC: " + String(voc) + " ppb");
  
  Serial.println("(OK)");
  
  Serial.println("Iniciando o DHT22...");
  dht.begin(); //Inicializar DHT22.
  Serial.println("DHT22 iniciado!");

  //MAX9814 - Ruído
  Serial.println("Lendo valor de ruido.");
  dbLevel = readDb();
  Serial.println("(OK)");
  
  //DHT22 - Temperatura e Umidade.
  Serial.println("Lendo temperatura e umidade.");
  temp = dht.readTemperature(); //Ler temperatura - DHT22.
  umid = dht.readHumidity(); //Ler umidade - DHT22.
  Serial.println("(OK)");
  
  //MHZ-14A - CO2
  Serial.println("Lendo CO2.");
  valorCO2 = leituraGas(); //Concentração de CO2 - MH-Z14A.
  Serial.println("(OK)");

    
  Serial.println("Iniciando o BH1750...");
  r = lightMeter.begin(); //Inicilizar o BH1750.
  if (r)
    Serial.println("BH1750 iniciado!");
  else {
    Serial.println("BH1750 não foi iniciado!");
    lux = 0;
  }

  delay(1000);
  

  //BH1750 - Luminosidade
  Serial.println("Lendo luminosidade.");
  lux = lightMeter.readLightLevel(); //Ler luminosidade - BH1750.
  Serial.println("(OK)");

  //WiFiManager
  WiFi.disconnect(true);
  delay(1000);
  WiFi.mode(WIFI_STA);
  delay(1000);

  #if gatewayNodeMode == 0
  WiFiManager wifiManager;
  WiFi.setAutoConnect(true);
  wifiManager.setTimeout(80);
  wifiManager.setBreakAfterConfig(true);
  wifiManager.setConfigPortalTimeout(80);

  //Tenta conectar com o último SSID conhecido
  //Se não conseguir, abre um AP para ser configurado
  //SSID do AP: AiPure  Senha: 12345678
  if(!wifiManager.autoConnect("AirPure WIFI", "12345678")) {
  Serial.println("Falhou para se conectar... Reiniciando.");
    delay(100);
    if (isWaitingForOta == 0){ESP.restart();}
  }

  Serial.println("Wifi conectado com sucesso!");  
  #endif
  #if gatewayNodeMode == 0
  if(valorCO2 > 1000){
    highCO2 = 1;
    Serial.println("Níveis de CO2 elevados. Fazendo envio de alerta pelo telegram.");
    bot.sendMessage(CHAT_ID, "Níveis de CO2 acima do tolerável! AIRPURE-ID: " + String(AIRPURE_ID) + " | Valor aferido: " + String(valorCO2) + " ppm. | " + String(formattedDate), "");
  } else {
    highCO2 = 0;
  }

  Serial.println("Obtendo horário atual.");
  timeClient.begin(); //Inicia cliente para obter horário.
  timeClient.setTimeOffset(-10800); //Fuso horário.
  while(!timeClient.update()) {
    timeClient.forceUpdate(); //Atualiza o horário.
    delay(100);
    timeoutHorario--;
    if (timeoutHorario == 0){
      break;
    }
  }
  
  formattedDate = "Horário de detecção: ";
  formattedDate += timeClient.getFormattedDate();  //Obtem o horário formatado.
  if(timeoutHorario == 0){
    Serial.println("Não foi possível obter o horário.");
    formattedDate = "Não foi possível obter o horário.";
  } else {
    Serial.println("Horário obtido com sucesso.");
  }
  
  //Faz a configuração para o OTA.
  configureOta();

  //Cria task que mantem a atualização do OTA.
  xTaskCreate(vLow,"vLow",10000,NULL,0,&task_low);
  
  //Configurar Broker MQTT - ThingSpeak.
  mqttClient.setServer(server, 1883); 

  //Conectar MQTT.
  if(!mqttClient.connected()){
    reconnect();
  }
  #endif
  //String de dados para enviar a Thingspeak.
  String dados = String("field1=" + String(temp, 2) + "&field2=" + String(umid, 2) + "&field3=" +String(eco2, 2)+ "&field4=" +String(voc, 2)+ "&field5=" + String(valorCO2)+ "&field6=" + String(lux,5)+ "&field7=" + String(dbLevel,2)+ "&field8=" + String(highCO2,2));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer,tamanho+1);
  
  //Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID[AIRPURE_ID-1]) + "/publish/"+String(writeAPIKey[AIRPURE_ID-1]);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho+1);

  //Se tiver passado o tempo de intervalo de amostragem, faz o envio. Caso contrário, não faz nada.
 // if(millis() - lastConnectionTime > postingInterval){
  Serial.println("Hora de enviar!");
  Serial.println(msgBuffer);
  #if gatewayNodeMode == 0
  int r = mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.
  
  if (r){
    Serial.println("Envio feito com sucesso!");
  } else {
    Serial.println("Envio não foi feito!");
    Serial.println("Resetando para evitar que isto aconteça novamente.");
    delay(1000);
    if (isWaitingForOta == 0){ESP.restart();}
  }
  lastConnectionTime = millis();
  #endif
  #if gatewayNodeMode == 1
  myData.a = temp;
  myData.b = umid;
  myData.c = eco2;
  myData.d = voc;
  myData.e = valorCO2;
  myData.f = lux;
  myData.g = dbLevel;
  myData.h = AIRPURE_ID;
  myData.i = String(writeAPIKey[AIRPURE_ID-1]);

  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &myData, sizeof(myData));
   
  if (result == ESP_OK) {
    Serial.println("Enviou com sucesso.");
  }
  else {
    Serial.println("Erro ao enviar o pacote.");
  }

    //Delay de um minuto para a próxima amostragem
  for(int timeoutOTA = 60; timeoutOTA > 0; timeoutOTA--){
    delay(1000);
    Serial.print(".");
  }
  #endif

}


 //Leitura e publicação dos dados para o ThingSpeak.
 void homeassistant_publish(){

   //Atualizando os topicos para cada airpure
   umidade_topic += String(AIRPURE_ID);
   temperatura_topic += String(AIRPURE_ID);
   tvoc_topic += String(AIRPURE_ID);
   co2_topic += String(AIRPURE_ID);
   eco2_topic += String(AIRPURE_ID);
   ruido_topic += String(AIRPURE_ID);
   luminosidade_topic += String(AIRPURE_ID);
  
  Serial.println("Publicando para o Home-Assistant.");
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(temperatura_topic.c_str(), String(temp, 2).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(umidade_topic.c_str(), String(umid, 2).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(tvoc_topic.c_str(), String(voc, 5).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(co2_topic.c_str(), String(valorCO2, 5).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(eco2_topic.c_str(), String(eco2, 5).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(ruido_topic.c_str(), String(dbLevel, 2).c_str(), true);
  delay(1500);
   mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(luminosidade_topic.c_str(), String(lux, 5).c_str(), true);
  delay(1500);
  Serial.println("Publicado com sucesso!");

}

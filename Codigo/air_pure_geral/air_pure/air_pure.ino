/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

#include "prototypes.h"

/*Setup*/
void setup() {
Serial.begin(115200); //Iniciar porta serial - USB.
Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); //Iniciar porta serial - UART.
      
#if isContadorPessoas == 1 /*Se estiver no modo contador de pessoas, define as portas pre-definidas como entrada/saida.*/
  pinMode(outputPin, OUTPUT);
  pinMode(btn01,INPUT_PULLDOWN);
  pinMode(btn02,INPUT_PULLUP);
  
  init_WiFi(); /*Inicializa o WiFi*/
  Serial.println("Wifi conectado com sucesso!"); 

#else /*Se não for contador de pessoas segue o fluxo normal.*/

  int status = WL_IDLE_STATUS; //Estado da conexão wifi.
  pinMode(dhtPin, INPUT); //Configurar modo dos pinos do DHT.
  pinMode(dbMeterPin, INPUT); //Configurar modo dos pinos do MAX9814.
  Wire.begin(); //Inicializa I2C
  NVS.begin();  //Inicializa a memoria nao volátil

  /*Obtem o ID do AirPure*/
  AIRPURE_ID = NVS.getString("id").toInt();
  Serial.println("ID AIRPURE: " + String(AIRPURE_ID));

  /*Cria task que mantem a atualização do OTA.*/
  xTaskCreate(vLowSerial, "vLowSerial", 10000, NULL, 0, &task_low_serial);
  i2cdetect();  // Mostra o barramento I2C
  delayTimes(2);

#if gatewayNodeMode == 1
  configEspNOW(); /*Configura o ESPNOW*/
#endif  /*endif gatewayNodeMode*/


#if isGateway == 1  /*Configura o ESPNOW para gateway*/
  configGWEspNOW();

#endif /*endif isGateway*/
#endif /*endif isContadorPessoas*/

}

/*Loop*/
void loop() {
 
#if isContadorPessoas == 1 /*Se for contador de pessoas, verifica constantemente o estado dos pinos e envia ao Home Assistant periodicamente.*/
digitalWrite(outputPin,HIGH);
val = digitalRead(btn01);

if(val){
  cont++;
  delay(300);
}

val = digitalRead(btn02);
if(val == 0){
  cont--;
  delay(300);
}

if(millis() - lastConnectionTime > postingInterval){
  mqttClient2.setServer(mqtt_server, 1883); //Configurar Broker MQTT - Home-assistant.
  
  //Conectar MQTT - HomeAssistant.
  if(!mqttClient2.connected()){
    reconnect_ha();
  }
  
  mqttClient2.loop(); //Manter conexão MQTT.
  if(!mqttClient2.connected()){
    Serial.println("Não foi possível publicar ao Home-assistant!");
  } else {
    homeassistant_publish_button();
  }
    delayTimes(3);  //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
    mqttClient2.disconnect();
    lastConnectionTime = millis();
}

#else /*Se não for contador de pessoas...*/

#if isGateway == 0  /*Se não for gateway...*/
  mqttpublish();  //Leitura dos sensores e envio.

#if gatewayNodeMode == 0 /*Se não estiver no modo ESPNOW...*/
  delayTimes(3);  //Delay para término do envio
  mqttClient.disconnect(); //Finaliza conexão após envio para tentar conexão com o Home-assistant
  delayTimes(1); //Delay de 1s
  mqttClient2.setServer(mqtt_server, 1883); //Configurar Broker MQTT - Home-assistant.

  /*Conectar MQTT - HomeAssistant.*/
  if (!mqttClient2.connected()) {
    reconnect_ha();
  }

  mqttClient2.loop(); //Manter conexão MQTT.
  if (!mqttClient2.connected()) {
    Serial.println("Não foi possível publicar ao Home-assistant!");
  } else {
    homeassistant_publish();
  }

  delayTimes(3); //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
  mqttClient2.disconnect();

  Serial.println("Fazendo o envio para o Google Sheets.");
  sendData(
      String(
          "Temperatura=" + String(temp, 2) + "&Umidade="
              + String(umid, 2) + "&eCO2=" + String(eco2, 2)
              + "&TVOC=" + String(voc, 2) + "&CO2="
              + String(valorCO2) + "&Lux=" + String(lux, 5)
              + "&Ruido=" + String(dbLevel, 2) + "&Alarme="
              + String(highCO2, 2) + "&ID=" + String(AIRPURE_ID)
              + "&V_FIRMWARE=" + String(V_FIRMWARE)));
  Serial.println("Envio executado. Um novo envio será feito em um minuto.");

  delayTimes(3); //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.

  lookForUpdates(); //Procura pela ultima versao disponivel do software. Se estiver desatualizado, inicia o upgrade.

  /*Delay de um minuto para a próxima amostragem*/
  for (int timeoutOTA = 60; timeoutOTA > 0; timeoutOTA--) {
    delayTimes(1);
    Serial.print(".");
  }
#endif  //isGatewayNodeMode
  if (isWaitingForOta == 0) {
    ESP.restart();
  }  //Resetando para iniciar uma nova amostragem
#endif //isGateway

#endif

}

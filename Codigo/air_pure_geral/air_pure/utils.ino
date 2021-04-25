/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

Ultrasonic ultrasonic1(PORTA_TRIGGER1, PORTA_ECHO1);
Ultrasonic ultrasonic2(PORTA_TRIGGER2, PORTA_ECHO2);


/*Função geral para delay*/
void delayTimes(int times){
  for(int i = 0; i < times; i++){
    delay(1000);
  }
}

int getDistance1()
{
    int distanciaCM;
    long microsec = ultrasonic1.timing();
    distanciaCM = ultrasonic1.convert(microsec, Ultrasonic::CM);

    return distanciaCM;

}

int getDistance2()
{
    int distanciaCM;
    long microsec = ultrasonic2.timing();
    distanciaCM = ultrasonic2.convert(microsec, Ultrasonic::CM);

    return distanciaCM;

}


/*Faz o map de valores, retornando floats (Necessário pois o map nativo retorna apenas inteiros).*/
float mapfloat(float x, float in_min, float in_max, float out_min, float out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


/*Função para obter horario atual*/
void getCurrentTime(){
  Serial.println("Obtendo horário atual.");
  timeClient.begin(); //Inicia cliente para obter horário.
  timeClient.setTimeOffset(-10800); //Fuso horário.
  while (!timeClient.update()) {
    timeClient.forceUpdate(); //Atualiza o horário.
    delay(100);
    timeoutHorario--;
    if (timeoutHorario == 0) {
      break;
    }
  }

  formattedDate = "Horário de detecção: ";
  formattedDate += timeClient.getFormattedDate(); //Obtem o horário formatado.
  if (timeoutHorario == 0) {
    Serial.println("Não foi possível obter o horário.");
    formattedDate = "Não foi possível obter o horário.";
  } else {
    Serial.println("Horário obtido com sucesso.");
  }
}




/*Função geral para delay*/
void init_WiFi(){
  if(wifiManager){
  estado = WIFI;
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
  if (!wifiManager.autoConnect("AirPure WIFI", "12345678")) {
    Serial.println("Falhou para se conectar... Reiniciando.");
    delay(100);
    if (isWaitingForOta == 0) {
      ESP.restart();
    }
  }
  estado = WORKING;
  } else {
  estado = WIFI;
  //WiFiManager
  WiFi.disconnect(true);
  delay(1000);
  WiFi.mode(WIFI_STA);
  delay(1000);
  esp_wifi_sta_wpa2_ent_set_identity((uint8_t *)EAP_ANONYMOUS_IDENTITY, strlen(EAP_ANONYMOUS_IDENTITY));
  esp_wifi_sta_wpa2_ent_set_username((uint8_t *)EAP_IDENTITY, strlen(EAP_IDENTITY));
  esp_wifi_sta_wpa2_ent_set_password((uint8_t *)EAP_PASSWORD, strlen(EAP_PASSWORD));
  esp_wpa2_config_t config = WPA2_CONFIG_INIT_DEFAULT(); 
  esp_wifi_sta_wpa2_ent_enable(&config); 
  WiFi.begin(ssid); 
  int counter = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    counter++;
    if(counter>=60){ 
      ESP.restart();
    }
  }
  client2.setCACert(eduroam_root_ca);
   Serial.println("WiFi conectado.");
  Serial.println("IP:"); 
  Serial.println(WiFi.localIP()); 
  }
}


/*Tasks*/
void vLow(void *pvParameters) {
  while (true) {
//Atualiza estado do OTA.
    ArduinoOTA.handle();
    esp_task_wdt_reset();
    vTaskDelay(pdMS_TO_TICKS(1000));
  }
}

/*Tasks*/
void vLowSerial(void *pvParameters) {
  /*Iniciando o watchdog*/

  while (true) {
    if (button1.numberKeyPresses >= 2){
            if (NVS.getString("wifiManager").toInt()){
              NVS.setString("wifiManager", "0");
              Serial.println("wifiManager ATIVADO.");
              ESP.restart();
            } else {
              NVS.setString("wifiManager", "1");
              Serial.println("wifiManager DESATIVADO.");
              ESP.restart();
            }
    
    }

    if (Serial.available()) {
      input = Serial.readStringUntil('\n');
      Serial.println(input);
      if (input.equals("setid")) {
        input = "";
        while (input.equals(""))
          input = Serial.readStringUntil('\n');

        NVS.setString("id", input);
        Serial.println("ID do Airpure definido: " + input);
        ESP.restart();

      }

      if (input.equals("setHostAirServer")) {
        input = "";
        while (input.equals(""))
          input = Serial.readStringUntil('\n');

        NVS.setString("hostAirServer", input);
        Serial.println("Host AirServer definido: " + input);
        ESP.restart();

      }
      if (input.equals("contaPessoas")) {
        if (NVS.getString("mode").toInt()){
          NVS.setString("mode", "0");
          Serial.println("Contador de pessoas DESABILITADO");
          ESP.restart();
        } else {
          NVS.setString("mode", "1");
          Serial.println("Contador de pessoas DESABILITADO");
          ESP.restart();
        }


      }

      if (input.equals("airServer")) {
        if (NVS.getString("airserver").toInt()){
          NVS.setString("airserver", "0");
          Serial.println("Envio ao AirServer ATIVADO.");
          ESP.restart();
        } else {
          NVS.setString("airserver", "1");
          Serial.println("Envio ao AirServer DESATIVADO.");
          ESP.restart();
        }


      }

      if (input.equals("wifiManager")) {
        if (NVS.getString("wifiManager").toInt()){
          NVS.setString("wifiManager", "0");
          Serial.println("wifiManager ATIVADO.");
          ESP.restart();
        } else {
          NVS.setString("wifiManager", "1");
          Serial.println("wifiManager DESATIVADO.");
          ESP.restart();
        }


      }
      
      
      if (input.equals("help")) {
        Serial.println(
            "~~~~~~~~~~~~~~~AirPure - POWERED BY UFG~~~~~~~~~~~~~~~");
        Serial.println("Lista de comandos disponiveis:");
        Serial.println("'setid': Define o ID do AirPure.");
        Serial.println("'contaPessoas': Define o dispositivo como contador de pessoas.");
        Serial.println("'airServer': Configura o AirPure para fazer os envios ao servidor AirServer.");
        Serial.println("'setHostAirServer': Configura o host para fazer os envios ao servidor AirServer.");
        Serial.println("'wifiManager': Configura entre wifiManager e conexao direta ao eduroam.");
        Serial.println(
            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      }
    }
    vTaskDelay(pdMS_TO_TICKS(100));
  }
}

void vLowLED(void *pvParameters) {
  const int freq = 5000;
  const int ledChannel = 0;
  const int resolution = 8;
  const int ledChannel2 = 1;
  esp_task_wdt_init(8, true);
  esp_task_wdt_add(NULL);
  ledcSetup(ledChannel, freq, resolution);
  ledcAttachPin(ledPin, ledChannel);
  ledcSetup(ledChannel2, freq, resolution);
  ledcAttachPin(ledPin2, ledChannel2);

  valorCO2 = leituraGas(); //Concentração de CO2 - MH-Z14A.
  float value = mapfloat(valorCO2, 390, 1200, 0, 255);
  ledcWrite(ledChannel2, 255 - value);
  
  while (true) {
    esp_task_wdt_reset();
    if(estado == ON_IDLE){
      value = mapfloat(valorCO2, 390, 1200, 0, 255);

      for(int i = 0; i< 255; i++){
        ledcWrite(ledChannel, i);
      if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(1);
      }

      for(int i = 255; i> 0; i--){
        ledcWrite(ledChannel, i);
              if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(1);
      }
      
      for(int i = 0; i< 255; i++){
        ledcWrite(ledChannel, i);
              if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(1);
      }
      for(int i = 255; i> 0; i--){
        ledcWrite(ledChannel, i);
      if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(15);
      }
    } else if (estado == WORKING){
      for(int i = 0; i< 255; i++){
        ledcWrite(ledChannel, i);
              if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(5);
      }

      for(int i = 255; i> 0; i--){
        ledcWrite(ledChannel, i);
              if(valorCO2 < 1000){
        ledcWrite(ledChannel2, 255 - value);
      } else {
        ledcWrite(ledChannel2, i);
      }
        esp_task_wdt_reset();
        delay(5);
      }
    } else {
      for(int i = 0; i< 255; i++){
        ledcWrite(ledChannel, i);
        esp_task_wdt_reset();
        delay(1);
      }
      
      for(int i = 255; i> 0; i--){
        ledcWrite(ledChannel, i);
        esp_task_wdt_reset();
        delay(1);
      }
      
    }
  }
}


/*Faz o envio dos registros para o gateway ESPNOW*/
void sendToESPNOW(String params) {
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
}

/*Faz o envio dos registros para uma tabela do Google Sheets*/
void sendData(String params) {
  HTTPClient http;
  String url = "https://script.google.com/a/discente.ufg.br/macros/s/"
      + GOOGLE_SCRIPT_ID[AIRPURE_ID - 1] + "/exec?" + params;
  Serial.print(url);
  Serial.print("Fazendo requisição ");
  http.begin(url, root_ca); //URL + Certificado
  int httpCode = http.GET();
  http.end();
  Serial.println("Codigo: " + httpCode);
}


/*Conectar ao Broker MQTT (ThingSpeak).*/
void reconnect() {
  char clientID[9]; //Identificação do cliente.

//Gerar ID do cliente.
  while (!mqttClient.connected()) {
    Serial.print("Tentando conexão MQTT...");
    for (int i = 0; i < 8; i++) {
      clientID[i] = alphanum[random(100)];
    }
    clientID[8] = '\0';

//Iniciar conexão MQTT.
    if (mqttClient.connect(clientID, mqttUserName, mqttPass)) {
      Serial.println("Conectado.");
    } else {
      Serial.print("Conexão falhou! Código de erro: ");
      Serial.print(mqttClient.state());
      Serial.print("O sistema irá reiniciar.");
      delay(1000);
      if (isWaitingForOta == 0) {
        ESP.restart();
      }
    }
  }
}

/*Conectar ao Broker MQTT - Home-Assistant.*/
void reconnect_ha() {

  Serial.print("Tentando se conectar ao Home-assistant.");
  if (mqttClient2.connect("ESP32", homeassistant_mqtt_user,
      homeassistant_mqtt_pass)) {
    Serial.println("Conectado.");
  } else {
    Serial.print("Conexão falhou. Código de erro: ");
    Serial.print(mqttClient2.state());
    Serial.println("Prosseguindo.");
  }

}



/*Enviar para o ThingSpeak.*/
void sendToThingSpeak() {
  #if gatewayNodeMode == 0
  //Configurar Broker MQTT - ThingSpeak.
  mqttClient.setServer(server, 1883);

  //Conectar MQTT.
  if (!mqttClient.connected()) {
    reconnect();
  }
  #endif  /*endif gatewayNodeMode*/
  
  //String de dados para enviar a Thingspeak.
  String dados = String(
      "field1=" + String(temp, 2) + "&field2=" + String(umid, 2)
          + "&field3=" + String(eco2, 2) + "&field4=" + String(voc, 2)
          + "&field5=" + String(valorCO2) + "&field6="
          + String(lux, 5) + "&field7=" + String(dbLevel, 2)
          + "&field8=" + String(highCO2, 2));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer, tamanho + 1);

  //Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID[AIRPURE_ID - 1])
      + "/publish/" + String(writeAPIKey[AIRPURE_ID - 1]);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho + 1);

  //Se tiver passado o tempo de intervalo de amostragem, faz o envio. Caso contrário, não faz nada.
  // if(millis() - lastConnectionTime > postingInterval){
  Serial.println("Hora de enviar!");
  Serial.println(msgBuffer);
  #if gatewayNodeMode == 0
    int r = mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.
  
    if (r) {
      Serial.println("Envio feito com sucesso!");
    } else {
      Serial.println("Envio não foi feito!");
      Serial.println("Resetando para evitar que isto aconteça novamente.");
      delay(1000);
      if (isWaitingForOta == 0) {
        ESP.restart();
      }
    }
    lastConnectionTime = millis();
  #endif /*endif gatewayNodeMode*/
}



/*Callback de quando a função do ESPNOW é chamada*/
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nÚltimo pacote:\t");
  Serial.println(
      status == ESP_NOW_SEND_SUCCESS ?
          "Entregue" : "Falhou ao ser entregue");
}

/*Callback de quando a função do ESPNOW é chamada*/
void OnDataRecv(const uint8_t *mac, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData));

  init_WiFi();
  Serial.println("Wifi conectado com sucesso!");

//Configurar Broker MQTT - ThingSpeak.
  mqttClient.setServer(server, 1883);

//Conectar MQTT.
  if (!mqttClient.connected()) {
    reconnect();
  }

  temp = myData.a;
  umid = myData.b;
  eco2 = myData.c;
  voc = myData.d;
  valorCO2 = myData.e;
  lux = myData.f;

//String de dados para enviar a Thingspeak.
  String dados = String(
      "field1=" + String(myData.a, 2) + "&field2=" + String(myData.b, 2)
          + "&field3=" + String(myData.c, 2) + "&field4="
          + String(myData.d, 2) + "&field5=" + String(myData.e)
          + "&field6=" + String(myData.f, 5) + "&field7="
          + String(myData.g, 2) + "&field8=" + String(0));
  int tamanho = dados.length();
  char msgBuffer[tamanho];
  dados.toCharArray(msgBuffer, tamanho + 1);

//Cria uma String de tópico e publica os dados na Thingspeak.
  String topicString = "channels/" + String(channelID[myData.h - 1])
      + "/publish/" + String(myData.i);
  tamanho = topicString.length();
  char topicBuffer[tamanho];
  topicString.toCharArray(topicBuffer, tamanho + 1);

//Se tiver passado o tempo de intervalo de amostragem, faz o envio. Caso contrário, não faz nada.
  Serial.println("Hora de enviar!");
  Serial.println(msgBuffer);

  int r = mqttClient.publish(topicBuffer, msgBuffer); //Publicar dados.

  if (r) {
    Serial.println("Envio feito com sucesso!");
  } else {
    Serial.println("Envio não foi feito!");
    Serial.println("Resetando para evitar que isto aconteça novamente.");
    delay(1000);
    if (isWaitingForOta == 0) {
      ESP.restart();
    }
  }
  lastConnectionTime = millis();
  delay(3000);  //Delay para término do envio
  mqttClient.disconnect(); //Finaliza conexão após envio para tentar conexão com o Home-assistant
  delay(1000); //Delay de 1s
  mqttClient2.setServer(mqtt_server, 1883); //Configurar Broker MQTT - Home-assistant.

//Conectar MQTT - HomeAssistant.
  if (!mqttClient2.connected()) {
    reconnect_ha();
  }

  mqttClient2.loop(); //Manter conexão MQTT.
  if (!mqttClient2.connected()) {
    Serial.println("Não foi possível publicar ao Home-assistant!");
  } else {
    homeassistant_publish();
  }

  delay(3000); //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.
  mqttClient2.disconnect();

  Serial.println("Fazendo o envio para o Google Sheets.");
  sendData(
      String(
          "Temperatura=" + String(temp, 2) + "&Umidade="
              + String(umid, 2) + "&eCO2=" + String(eco2, 2)
              + "&TVOC=" + String(voc, 2) + "&CO2="
              + String(valorCO2) + "&Lux=" + String(lux, 5)
              + "&Ruido=" + String(dbLevel, 2) + "&Alarme="
              + String(highCO2, 2) + "&ID="
              + String(AIRPURE_ID)));
  Serial.println("Envio executado. Um novo envio será feito em um minuto.");

  delay(3000); //Delay para permitir que os dados sejam enviados antes de entrar no modo sleep.

  ESP.restart();

}

/*Leitura e publicação dos dados para o ThingSpeak.*/
void homeassistant_publish() {

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
  mqttClient2.publish(temperatura_topic.c_str(), String(temp, 2).c_str(),
      true);
 delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(umidade_topic.c_str(), String(umid, 2).c_str(), true);
  delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(tvoc_topic.c_str(), String(voc, 5).c_str(), true);
  delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(co2_topic.c_str(), String(valorCO2, 5).c_str(), true);
  delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(eco2_topic.c_str(), String(eco2, 5).c_str(), true);
  delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(ruido_topic.c_str(), String(dbLevel, 2).c_str(), true);
  delay(1000);
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(luminosidade_topic.c_str(), String(lux, 5).c_str(),
      true);
  delay(1000);
  Serial.println("Publicado com sucesso!");

}

/*Leitura e publicação dos dados para o ThingSpeak.*/
void homeassistant_publish_button() {

  Serial.println("Publicando para o Home-Assistant.");
  mqttClient2.loop(); //Manter conexão MQTT.
  mqttClient2.publish(botao_topic.c_str(), String(cont).c_str(), true);
  Serial.println(String(cont));
  delay(1000);
  Serial.println("Publicado com sucesso!");

}


/*Configura o ESPNOW.*/
void configEspNOW() {
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
}

/*Configura o ESPNOW para gateway.*/
void configGWEspNOW() {
   WiFi.mode(WIFI_STA);
  
  if (esp_now_init() != ESP_OK) {
  Serial.println("Erro ao iniciar o ESP-NOW");
  return;
  }
  
  esp_now_register_recv_cb(OnDataRecv);
}

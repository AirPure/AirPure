/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

Ultrasonic ultrasonic1(PORTA_TRIGGER1, PORTA_ECHO1);
Ultrasonic ultrasonic2(PORTA_TRIGGER2, PORTA_ECHO2);

/*ESPNOW - MAC  A4:CF:12:75:67:00*/
uint8_t broadcastAddress[] = {0xA4, 0xCF, 0x12, 0x75, 0x67, 0x00};
 
  // Register peer
  esp_now_peer_info_t peerInfo;
/*Função geral para delay*/
void delayTimes(int times){
  for(int i = 0; i < times; i++){
    delay(1000);
  }
}

void getValuesFromNVS(){
  
  NVS.begin();  //Inicializa a memoria nao volátil
  isContadorPessoas = NVS.getString("mode").toInt();
  if(isContadorPessoas){
    Serial.println("Contador de pessoas ATIVADO.");
  } else {
    Serial.println("Contador de pessoas DESATIVADO.");
  }

    receiver = NVS.getString("receiver").toInt();
  if(receiver){
    Serial.println("receiver ATIVADO.");
  } else {
    Serial.println("receiver DESATIVADO.");
  }

      sender = NVS.getString("sender").toInt();
  if(sender){
    Serial.println("sender ATIVADO.");
  } else {
    Serial.println("sender DESATIVADO.");
  }

  isSendingAirServer = !NVS.getString("airserver").toInt();
  wifiManager = !NVS.getString("wifiManager").toInt();
  if(isSendingAirServer){
    Serial.println("Envio ao AirServer ATIVADO.");
  } else {
    Serial.println("Envio ao AirServer DESATIVADO.");
  }

  if(wifiManager){
    Serial.println("wifiManager ATIVADO.");
  } else {
    Serial.println("wifiManager DESATIVADO.");
  }
  
  /*Obtem o ID do AirPure*/
  AIRPURE_ID = NVS.getString("id").toInt();
  Serial.println("ID AIRPURE: " + String(AIRPURE_ID));


}


/*Faz a configuração de GPIOS.*/
void configureGPIOS(){
  pinMode(ledPin, OUTPUT); 
  pinMode(ledPin2,OUTPUT);
  pinMode(dhtPin, INPUT); //Configurar modo dos pinos do DHT.
  pinMode(0, INPUT_PULLUP);
  pinMode(dbMeterPin, INPUT); //Configurar modo dos pinos do MAX9814.
  attachInterrupt(0, isr, FALLING);
  pinMode(2,OUTPUT);
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
 Serial.println("Wifi conectado com sucesso!");
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
      

            if (input.equals("sender")) {
        if (NVS.getString("sender").toInt()){
          NVS.setString("sender", "0");
          Serial.println("sender ATIVADO.");
          ESP.restart();
        } else {
          NVS.setString("sender", "1");
          Serial.println("sender DESATIVADO.");
          ESP.restart();
        }
            


      }

       if (input.equals("receiver")) {
        if (NVS.getString("receiver").toInt()){
          NVS.setString("receiver", "0");
          Serial.println("receiver ATIVADO.");
          ESP.restart();
        } else {
          NVS.setString("receiver", "1");
          Serial.println("receiver DESATIVADO.");
          ESP.restart();
        }

        if (input.equals("i2cdetect")){
            /*Mostra o barramento i2c.*/
            i2cdetect();  
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
void sendToESPNOW() {
  myData.a = temp;
  myData.b = umid;
  myData.c = eco2;
  myData.d = voc;
  myData.e = valorCO2;
  myData.f = lux;
  myData.g = dbLevel;
  myData.h = AIRPURE_ID;
  myData.i = "";
  
  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &myData, sizeof(myData));
  
  if (result == ESP_OK) {
  Serial.println("Enviou com sucesso.");
  }
  else {
  Serial.println("Erro ao enviar o pacote.");
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
  int counter = 0;
//Gerar ID do cliente.
  if (!mqttClient.connected()) {
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

/*Separa uma string*/
String getValue(String data, char separator, int index)
{
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length() - 1;

  for (int i = 0; i <= maxIndex && found <= index; i++)
  {
    if (data.charAt(i) == separator || i == maxIndex)
    {
      found++;
      strIndex[0] = strIndex[1] + 1;
      strIndex[1] = (i == maxIndex) ? i + 1 : i;
    }
  }
  return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}

/*Callback de quando a função do ESPNOW é chamada*/
void OnDataRecv(const uint8_t *mac, const uint8_t *incomingData, int len) {
  delay(200);
  digitalWrite(2,HIGH);
  delay(200);
  digitalWrite(2,LOW);
  memcpy(&myData, incomingData, sizeof(myData));

  temp = myData.a;
  umid = myData.b;
  eco2 = myData.c;
  voc = myData.d;
  valorCO2 = myData.e;
  lux = myData.f;
  dbLevel = myData.g;
  AIRPURE_ID = myData.h;

  

  /*Guarda as funcoes dentro da memoria RTC nao volatil.*/
  if (recordCounter < maxRecords){
    Serial.println("Salvando o pacote " + String(recordCounter) + " dentro da memoria RTC.");
    if (recordCounter == 0){
      valores = String("INSERT " + String(temp, 2) + " " + String(umid, 2) + " " + String(eco2,2) + " " + String(voc, 2) + " " + String(valorCO2) + " " + String(dbLevel) + " " + String(lux) + " " +  String(AIRPURE_ID));
    } else {
      valores += String("/INSERT " + String(temp, 2) + " " + String(umid, 2) + " " + String(eco2,2) + " " + String(voc, 2) + " " + String(valorCO2) + " " + String(dbLevel) + " " + String(lux) + " " +  String(AIRPURE_ID));
    }
    recordCounter++;
  } else {
    NVS.setString("blob", valores);
    NVS.setInt("blobFull",1);
    delay(1000);
    ESP.restart();
  }


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

/*Obtem canal de comunicacao da rede WiFi*/
int32_t getWiFiChannel(const char *ssid) {

    if (int32_t n = WiFi.scanNetworks()) {
        for (uint8_t i=0; i<n; i++) {
            if (!strcmp(ssid, WiFi.SSID(i).c_str())) {
                return WiFi.channel(i);
            }
        }
    }

    return 0;
}
/*Configura o ESPNOW.*/
void configEspNOW() {
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // Once ESPNow is successfully Init, we will register for Send CB to
  // get the status of Trasnmitted packet
  esp_now_register_send_cb(OnDataSent);
 
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 1;  
  peerInfo.encrypt = false;
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }
}

/*Configura o ESPNOW para gateway.*/
void configGWEspNOW() {
   WiFi.mode(WIFI_STA);
  WiFi.disconnect();

  if (esp_now_init() != ESP_OK) {
  Serial.println("Erro ao iniciar o ESP-NOW");
  return;
  }
  Serial.println("Configurando GW.");
  esp_now_register_recv_cb(OnDataRecv);
}

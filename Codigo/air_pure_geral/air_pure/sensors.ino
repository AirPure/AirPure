/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/


/*Leitura da concentração de gás - MH-Z14A.*/
float leituraGas() {
  Serial.println("Lendo CO2.");
  const byte comando[9] = { 0xFF, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x79 }; //Comando de leitura da concentração de gás.
  byte resposta[9]; //Armazena a resposta do comando de leitura.

//Escrever comando de leitura.
  for (int i = 0; i < 9; i++) {
    Serial2.write(comando[i]);
  }
  delay(30);
//Ler retorno do comando de leitura.
  if (Serial2.available()) {
    for (int i = 0; i < 9; i++) {
      resposta[i] = Serial2.read();
    }
    int alto = (int) resposta[2];
    int baixo = (int) resposta[3];
    float CO2 = ((alto * 256) + baixo); //Concentração de CO2 em ppm, referência datasheet.

    if (CO2 > 10000) {    //Range máximo do sensor e 10000ppm
      CO2 = 400; //Caso o valor bata o fundo de escala (comum no processo de warm-up do sensor), envia o valor base de CO2 em ppm.
    }

    Serial.println("(OK)");

    return CO2;
  }
}

/*Leitura de luminosidade*/
float readLux() {

  Serial.println("Iniciando o BH1750...");
  r = lightMeter.begin(); //Inicilizar o BH1750.
  if (r)
    Serial.println("BH1750 iniciado!");
  else {
    Serial.println("BH1750 não foi iniciado!");
    lux = 0;
  }

  delayTimes(1);

  //BH1750 - Luminosidade
  Serial.println("Lendo luminosidade.");
  lux = lightMeter.readLightLevel(); //Ler luminosidade - BH1750.
  Serial.println("(OK)");
}

/*Leitura de ruído*/
float readDb() {

  Serial.println("Lendo valor de ruido.");
  unsigned long startMillis = millis();  // Inicio da janela de amostragem
  unsigned int peakToPeak = 0;   // Nível pico a pico
  unsigned int signalMax = 0;  //Valor análogico mínimo
  unsigned int signalMin = 1024;  //Valor analógico máximo
  double voltsTotal = 0;

  for(int i = 0; i < 10; i ++){
  // Coleta dados por aproximadamente 50ms
  while (millis() - startMillis < sampleWindow) {
    sample = analogRead(dbMeterPin); //Faz a leitura analógica do MAX9814
    if (sample < 1024) {
      if (sample > signalMax) {
        signalMax = sample;  // Salva apenas os valores máximos
      } else if (sample < signalMin) {
        signalMin = sample;  // Salva apenas os valores mínimos
      }
    }
  }
  peakToPeak = signalMax - signalMin; // Máximo - Mínimo = Amplitude pico a pico
  double volts = (peakToPeak * 3.0) / 1024; // Converte para um valor de tensao aproximado
  voltsTotal += volts;
  }

  voltsTotal = voltsTotal/10;
  Serial.println("(OK)");
  if (voltsTotal <= 1000) { //Filtra possíveis valores residuais 
    float value = mapfloat(voltsTotal, 0.00, 3.00, 37.00, 82.00);
    return value; //Retorna o valor convertido para dB
  } else {
    return 82; 
  }

}

/*Leitura de umidade e temperatura*/
float readDHT22() {
  Serial.println("Iniciando o DHT22...");
  dht.begin(); //Inicializar DHT22.
  Serial.println("DHT22 iniciado!");

  
  //DHT22 - Temperatura e Umidade.
  Serial.println("Lendo temperatura e umidade.");
  temp = dht.readTemperature(); //Ler temperatura - DHT22.
  umid = dht.readHumidity(); //Ler umidade - DHT22.
  Serial.println("(OK)");
  
}


/*Leitura de TVOC e eCO2*/
float readCCS811() {
  //Inicializar sensor CCS811.
  Serial.println("Iniciando o CCS811...");
  if (!ccs.begin()) {
    Serial.println("CCS811 não foi iniciado!");
  } else {
    Serial.println("CCS811 iniciado!");
  }
  Serial.println("Aquecendo CCS811...");
  eco2 = 0;
  eco2Sum = 0;
  vocSum = 0;
  voc = 0;
  for (int i = 0; i < 10; i++) {
    if (ccs.available()) {
      if (!ccs.readData()) {
        eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
        voc = ccs.getTVOC(); //Ler TVOC - CCS811.
        //Serial.println("eCO2: " + String(eco2) + " ppm| TVOC: " + String(voc) + " ppb");
      } else {
        Serial.println("Erro de leitura CCS811!");

      }
    }
    delayTimes(1);
  }
  Serial.println("Lendo TVOC...");
  for (int i = 0; i < 20; i++) {
    if (ccs.available()) {
      if (!ccs.readData()) {
        eco2 = ccs.geteCO2(); //Ler eCO2 - CCS811.
        voc = ccs.getTVOC(); //Ler TVOC - CCS811.
        vocSum += voc;
        eco2Sum += eco2;
      } else {
        Serial.println("Erro de leitura CCS811!");

      }
    }
    delayTimes(1);
  }
  //Media dos valores...
  eco2 = eco2Sum / 20;
  voc = vocSum / 20;

  if (eco2 > 10000 || voc > 10000) {
    eco2 = 400;
    voc = 0;
  }

  Serial.println("(OK)");
}


/*Leitura e publicação dos dados para o ThingSpeak.*/
void mqttpublish() {

  //Leitura dos valores.
  Serial.println("Iniciando leitura dos sensores.");
    
  valorCO2 = leituraGas(); //Concentração de CO2 - MH-Z14A.

  readCCS811(); //Leitura do CCS811

  readDHT22();  //Leitura do DHT22

  dbLevel = readDb();//MAX9814 - Ruído

  readLux();  //Leitura do BH1750

  /*Se o AirPure não esta no modo ESP-NOW, faz a verificação do nivel de CO2 e caso esteja alto, faz o envio de alerta para o Telegram.*/
  #if gatewayNodeMode == 0
  init_WiFi();  //Inicializa o WiFi
  Serial.println("Wifi conectado com sucesso!");

  /*Obtem o horario atual atraves de NTP para envio de alerta.*/
  getCurrentTime();

  if (valorCO2 > 1000) {
    highCO2 = 1;
    Serial.println(
        "Níveis de CO2 elevados. Fazendo envio de alerta pelo telegram.");
    bot.sendMessage(CHAT_ID,
        "Níveis de CO2 acima do tolerável! AIRPURE-ID: "
            + String(AIRPURE_ID) + " | Valor aferido: "
            + String(valorCO2) + " ppm. | " + String(formattedDate),
        "");
  } else {
    highCO2 = 0;
  }
  
  /*Faz a configuração para o OTA.*/
  configureOta();

  /*Cria task que mantem a atualização do OTA.*/
  xTaskCreate(vLow, "vLow", 10000, NULL, 0, &task_low);

 #endif  /*endif gatewayNodeMode*/

 /*Faz o envio dos dados para o ThingSpeak*/
 sendToThingSpeak();
 
 #if gatewayNodeMode == 1
  sendToESPNOW();
 #endif /*endif gatewayNodeMode*/

}

/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/


/*Configuração OTA*/
void configureOta(){
    ArduinoOTA
  .onStart([]() {
    String type;
    if (ArduinoOTA.getCommand() == U_FLASH)
      type = "sketch";
    else // U_SPIFFS
      type = "filesystem";
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

/*Verificação de updates via OTA*/
void lookForUpdates(){
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
}

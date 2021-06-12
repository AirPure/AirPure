/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

#include "prototypes.h"

/*Interrupção para configuração da rede EDUROAM.*/
void IRAM_ATTR isr() {
  button1.numberKeyPresses += 1;
  button1.pressed = true;
}


/*Setup*/
void setup() {

  Serial.begin(115200); //Iniciar porta serial - USB.
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2); //Iniciar porta serial - UART.

  /*Obtem valores salvos na NVS*/
  getValuesFromNVS();

  /*Configura as GPIOS.*/
  configureGPIOS();

    Serial.print("ESP Board MAC Address:  ");
  Serial.println(WiFi.macAddress());

  /*Cria task que mantém a comunicacao Serial.*/
  xTaskCreate(vLowSerial, "vLowSerial", 10000, NULL, 0, &task_low_serial);

  /*Cria task que mantém o funcionamento do LED..*/
  xTaskCreate(vLowLED, "vLowLED", 10000, NULL, 0, &task_low_led);

  /*Status inicial da conexao WiFi*/
  int status = WL_IDLE_STATUS; 

  /*Inicializa o I2C*/
  Wire.begin(); 


  if (sender){
    configEspNOW();
  } else if (receiver){  
    if (NVS.getInt("blobFull") == 0){
      configGWEspNOW();
    } else {
      init_WiFi();  
      sendToAirServer();
      Serial.println("Todos os pacotes enviados com sucesso. Reiniciando.");
      ESP.restart();
    }
  }

}

/*Loop*/
void loop() {
  if(!receiver){
  /*Estado de atividade do AirPure.*/
  estado = WORKING;

  /*Leitura dos sensores*/
  readSensors();  
  if(!sender){
  /*Inicializa a conexao WiFi*/
  init_WiFi();  


  /*Faz o envio dos dados para o Google Sheets.*/
  sendToSheets();

  /*Delay para permitir que os dados sejam enviados.*/
  delay(3000);  

  /*Faz o envio dos dados para o AirServer.*/
  sendToAirServer();

  /*Procura pela ultima versao disponivel do software. Se estiver desatualizado, inicia o upgrade.*/
  lookForUpdates(); 
  } else {
    sendToESPNOW();
  }

  /*Atualiza status de funcionamento.*/
  estado = ON_IDLE;
  
  delay(1000);

  /*Faz o restart periodico.*/
  ESP.restart();
  }
}

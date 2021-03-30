/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/



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
#define mqtt_server "airpure-home-assistant.duckdns.org" //Endereço MQTT Home Assistant
#define gatewayNodeMode 0 //Modo Node
#define isGateway 0 //Modo GW
#define outputPin 25 //Contador de pessoas
#define btn01 32  //Contador de pessoas
#define btn02 12 //Contador de pessoas
#define V_FIRMWARE 5  //Versão do Firmware
#define PORTA_TRIGGER1   13
#define PORTA_ECHO1      14
#define PORTA_TRIGGER2   15
#define PORTA_ECHO2      16
#define ON_IDLE 1
#define WORKING 2
#define LOOKING_FOR_WIFI
#define ledPin 15

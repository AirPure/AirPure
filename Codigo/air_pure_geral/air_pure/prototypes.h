/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

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
#include <esp_task_wdt.h> 
#include "globalvar.h"
#include "globaldef.h"
#include <Ultrasonic.h>



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
Ultrasonic ultrasonic1(PORTA_TRIGGER1, PORTA_ECHO1);
Ultrasonic ultrasonic2(PORTA_TRIGGER2, PORTA_ECHO2);

TaskHandle_t task_low_serial;
TaskHandle_t task_low_led;
TaskHandle_t task_low;
void vLow(void *pvParameters);
void vLowSerial(void *pvParameters);
void vLowLED(void *pvParameters);
void homeassistant_publish(void);

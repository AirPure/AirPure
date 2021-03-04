/*
O AirPure é um dispositivo embarcado para análise de qualidade do ar.
Seu código atualmente é mantido por professores e estudantes da UFG.
Confira nosso repositório no GitHub: https://github.com/AirPure/AirPure
*/

/*Função geral para delay*/
void delayTimes(int times){
  for(int i = 0; i < times; i++){
    delay(1000);
  }
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

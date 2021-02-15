<img src="https://cdn.discordapp.com/attachments/692689155943301195/780950135030546452/headeratualizado.png">

[AirPure](https://sites.google.com/view/airpure/pagina-inicial?authuser=0) é um sistema embarcado para análise de qualidade do ar.


### Motivação
A qualidade do ar em ambientes internos torna-se uma preocupação em consequência do
aumento de construções de ambientes selados devido à climatização artificial. Apesar da
existência de legislações que exigem o monitoramento e controle da qualidade do ar, em
muitos locais há indícios de que essa prática não é aplicada, demonstrando a necessário
da implantação de um dispositivo que realize esse monitoramento de forma autônoma
e constante. Este trabalho apresenta o Air-pure, uma solução de Internet das Coisas
para o monitoramento da qualidade do ar em ambientes internos, que realiza a leitura
de temperatura, umidade relativa e concentrações de dióxido de carbono e Compostos
Orgânicos Voláteis Totais. A solução é organizada nas seguintes etapas: construção do
dispositivo físico, armazenamento e fusão dos dados na plataforma IoT ThingSpeakTM,
e página Web para apresentação dos dados aos usuários. Experimentos realizados em
ambientes climatizados artificialmente, mostram elevações na concentração de CO2 e
TVOC, que chegam a ultrapassar os limites recomendados. Os dados obtidos comprovam
a importância do monitoramento constante para avaliar situações diversas no ambiente e
a necessidade de ações, como a ventilação adequada, para melhoria da qualidade do ar e
consequentemente a saúde dos ocupantes.


### Tecnologias
* :white_check_mark: MQTT 
* :white_check_mark: IoT 
* :white_check_mark: ThingSpeak 
* :white_check_mark: WiFi 

### Hardware
* :floppy_disk: ESP32 
* :floppy_disk: MHZ-14A 
* :floppy_disk: CCS811 
* :floppy_disk: DHT-22 
* :floppy_disk: MAX-9814 
* :floppy_disk: BH-1750

### Participantes do Projeto
* :bust_in_silhouette: Prof. Dr. Renato Bulcão Neto 
* :bust_in_silhouette: Prof. Dr. Iwens Sene Júnior 
* :bust_in_silhouette: Bruna Michelly  
* :bust_in_silhouette: Melyssa Mariana 
* :bust_in_silhouette: Isabela França 
* :bust_in_silhouette: Lucas Felipe 
* :bust_in_silhouette: Antonio Emílio


### Esquemático
<img src="https://cdn.discordapp.com/attachments/764880223560794172/810969944434933830/esquematico.png">
<img src="https://cdn.discordapp.com/attachments/764880223560794172/782573039753363456/unknown.png">

### Canais ThingSpeak
Canal 1 (1160801): [Clique Aqui](https://thingspeak.com/channels/1160801)</br>
Canal 2 (1167146): [Clique Aqui](https://thingspeak.com/channels/1167146)</br>
Canal 3 (1177969): [Clique Aqui](https://thingspeak.com/channels/1177969)</br>

### API Keys
MQTT PASS: 0QIMS6VELRQUUC0A (GERAL)</br>
WRITE API KEY: WDPPXX2EI7II24E0 (AirPure - #001)</br>
WRITE API KEY: EB6J5ATU4ETP7984 (AirPure - #002)</br>
WRITE API KEY: W1OE6ARR4S0X2OAT (AirPure - #003)</br>

### Como visualizar a aplicação
Para acessar, [clique aqui.](https://sites.google.com/view/airpure/pagina-inicial?authuser=0)</br>
Para visualizar a dashboard que está sendo montada, [clique aqui.](https://airpuredashboard.vercel.app/admin/dashboard)</br>
Para visualizar o website, [clique aqui.](https://airpurelanding.vercel.app/)

package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.amostragens;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import br.ufg.airpure.entity.*;
import java.time.LocalTime;
import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Startup
@Singleton
public class GeradorDeDados {

    private String[] nomes = {"Huguinho", "Zezinho", "Luizinho"};
    private Random random = new Random();

    @Inject
    private Apuracao apuracao;

    /**
     * De minuto em minuto, gera um array no formato:
     *
     * [
     * [Huguinho, X] [Zezinho, Y] [Luizinho, Z] ] (onde X,Y e Z são números
     * aleatórios entre 0 e 100)
     *
     * E passa para o mecanismo de apuração
     *
     */
    @Schedule(hour = "11", minute = "0", second = "0", persistent = false)
    public void gera() throws MalformedURLException, IOException, AddressException, MessagingException, InterruptedException {
        System.out.println("Iniciando verificação para notificações.");
        /*
        LocalTime now = LocalTime.now();
        System.out.println(now.getHour());
        if (!(now.getHour() > 8 && now.getHour() < 17)){
            System.out.println("Horario nao propicio para envio de alertas.");
            return;
        }*/

        Main.db = null;
        BD.ConectarBD();
        String sql = "";
        String msg = "";
        String msgTelegram = "";
        //String sql = "SELECT DISTINCT ON (id_dispositivos) id_dispositivos,* FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado +") ORDER BY id_dispositivos,id DESC;";
        sql = "SELECT avg(eCO2) AS eco2,avg(CO2) as co2,avg(lux) as lux,avg(tvoc) as tvoc,avg(db) as db,avg(umidade) as umidade,avg(temperatura) as temperatura,id_dispositivos,ambientes.sala,ambientes.predio,ambientes.local,usuario.email FROM amostragens INNER JOIN usuario ON id_projeto IN (select id_projeto from dispositivos where id = id_dispositivos) INNER JOIN ambientes ON ambientes.id IN (select id_ambientes FROM dispositivos WHERE id_projeto = usuario.id_projeto) WHERE (DATE_PART('Day',now() - data::timestamptz) < 1) group by id_dispositivos, ambientes.sala, ambientes.predio,ambientes.local,usuario.email ORDER BY id_dispositivos DESC";
        try {
            Main.sql = Main.db.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();

        }

        ResultSet rs = null;
        try {

            rs = Main.sql.executeQuery(sql);
            System.out.println(sql);
            while (rs.next()) {
                Users process = new Users();
                amostragens amostra = new amostragens();
                ambientes ambiente = new ambientes();
                process.setEmail(rs.getString("email"));
                ambiente.setSala(rs.getString("sala"));
                ambiente.setPredio(rs.getString("predio"));
                ambiente.setLocal(rs.getString("local"));
                amostra.setCo2(rs.getFloat("co2"));
                amostra.setEco2(rs.getFloat("eco2"));
                amostra.setTvoc(rs.getFloat("tvoc"));
                amostra.setLux(rs.getFloat("lux"));
                amostra.setDb(rs.getFloat("db"));
                amostra.setTemperatura(rs.getFloat("temperatura"));
                amostra.setUmidade(rs.getFloat("umidade"));

                msg = "\n\nOla! Voce está recebendo este aviso porque solicitou um acompanhamento em tempo real.\n\n Seguem abaixo as medias lidas das ultimas 24 horas.\n\n";
                msgTelegram = "Local: " + ambiente.getLocal() + " | Predio: " + ambiente.getPredio() + " | Sala: " + ambiente.getSala() + "\n";

               
                    msg += "ECO2 - Variacao media: " + amostra.getEco2() + " ppm\n";
                
               
                    msg += "CO2 - Variacao media: " + amostra.getCo2() + " ppm  \n";
                
                
                    msg += "TVOC - Variacao media: " + amostra.getTvoc() + " ppb\n";


                    msg += "Temperatura - Variacao media: " + amostra.getTemperatura() + " ºC \n";
                
                
                    msg += "Umidade - Variacao media: " + amostra.getUmidade() + " % \n";
                
                    
                    msg += "Ruído - Variacao media: " + amostra.getDb() + " dB \n";

                    msg += "Luminosidade - Variacao media: " + amostra.getLux() + " lux | \n";
                

                    if (process.getEmail() != null) {
                        Properties props = new Properties();
                        props.put("mail.smtp.host", "smtp.gmail.com");
                        props.put("mail.smtp.socketFactory.port", "465");
                        props.put("mail.smtp.socketFactory.class",
                                "javax.net.ssl.SSLSocketFactory");
                        props.put("mail.smtp.auth", "true");
                        props.put("mail.smtp.port", "465");

                        Session session = Session.getInstance(props,
                                new javax.mail.Authenticator() {
                            protected PasswordAuthentication getPasswordAuthentication() {
                                return new PasswordAuthentication("airpureufg@gmail.com",
                                        "014589Oi@");
                            }
                        });
                        session.setDebug(true);

                        try {

                            Message message = new MimeMessage(session);
                            message.setFrom(new InternetAddress("airpureufg@gmail.com"));
                            //Remetente

                            Address[] toUser = InternetAddress //Destinatário(s)
                                    .parse(process.getEmail());

                            message.setRecipients(Message.RecipientType.TO, toUser);
                            message.setSubject("AirPure - Alerta de variação");//Assunto
                            message.setText(msg);
                            Transport.send(message);

                        } catch (MessagingException e) {
                            throw new RuntimeException(e);
                        }
                    }

                    Thread.sleep(1000);
                

            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }
        System.out.println("Finalizando notificações.");
    }
    
    
    @Schedule(hour = "*", minute = "*/30", persistent = false)
    public void aviso() throws MalformedURLException, IOException, AddressException, MessagingException, InterruptedException {
        System.out.println("Iniciando verificação para notificações.");
        /*
        LocalTime now = LocalTime.now();
        System.out.println(now.getHour());
        if (!(now.getHour() > 8 && now.getHour() < 17)){
            System.out.println("Horario nao propicio para envio de alertas.");
            return;
        }*/

        Main.db = null;
        BD.ConectarBD();
        String sql = "";
        String msg = "";
        String msgTelegram = "";
        //String sql = "SELECT DISTINCT ON (id_dispositivos) id_dispositivos,* FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado +") ORDER BY id_dispositivos,id DESC;";
        sql = "SELECT DISTINCT ON(id_dispositivos) id_dispositivos,* FROM amostragens INNER JOIN usuario ON id_projeto IN (select id_projeto from dispositivos where id = id_dispositivos) INNER JOIN ambientes ON ambientes.id IN (select id_ambientes FROM dispositivos WHERE id_projeto = usuario.id_projeto) ORDER BY id_dispositivos,amostragens.id DESC";
        int isNecessary = 0;
        try {
            Main.sql = Main.db.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();

        }

        ResultSet rs = null;
        try {

            rs = Main.sql.executeQuery(sql);
            System.out.println(sql);
            while (rs.next()) {
                isNecessary = 0;
                Users process = new Users();
                amostragens amostra = new amostragens();
                ambientes ambiente = new ambientes();
                process.setChatId(rs.getString("chat_id"));
                process.setBtoken(rs.getString("btoken"));
                process.setEmail(rs.getString("email"));
                process.setNome(rs.getString("nome"));
                ambiente.setSala(rs.getString("sala"));
                ambiente.setPredio(rs.getString("predio"));
                ambiente.setLocal(rs.getString("local"));
                amostra.setCo2(rs.getFloat("co2"));
                amostra.setEco2(rs.getFloat("eco2"));
                amostra.setTvoc(rs.getFloat("tvoc"));
                amostra.setLux(rs.getFloat("lux"));
                amostra.setDb(rs.getFloat("db"));
                amostra.setTemperatura(rs.getFloat("temperatura"));
                amostra.setUmidade(rs.getFloat("umidade"));
                process.setMaxCO2(rs.getFloat("maxCO2"));
                process.setMaxUMIDADE(rs.getFloat("maxUMIDADE"));
                process.setMaxTVOC(rs.getFloat("maxTVOC"));
                process.setMaxRUIDO(rs.getFloat("maxRUIDO"));
                process.setMaxLUMINOSIDADE(rs.getFloat("maxLUMINOSIDADE"));
                process.setMaxTEMPERATURA(rs.getFloat("maxTEMPERATURA"));
                process.setMaxECO2(rs.getFloat("maxECO2"));

                msg = "\n\nOla! Voce está recebendo este aviso porque solicitou um acompanhamento em tempo real.\n\n Foram detectadas alteracoes de parametros fora dos limites pre-definidos.\n\n - Local: " + ambiente.getLocal() + " - Predio: " + ambiente.getPredio() + " - Sala: " + ambiente.getSala() + " \n";
                msgTelegram = "Variacao detectada - Local: " + ambiente.getLocal() + " - Predio: " + ambiente.getPredio() + " - Sala: " + ambiente.getSala() + " - ";

                if (amostra.getEco2() > process.getMaxECO2()) {
                    msg += "ECO2 - Variacao lida: " + amostra.getEco2() + " ppm | Variacao maxima permitida: " + process.getMaxECO2() + " ppm \n";
                    msgTelegram += "ECO2: " + amostra.getEco2() + " ppm - ";
                    isNecessary = 1;
                }
                if (amostra.getCo2() > process.getMaxCO2()) {
                    msg += "CO2 - Variacao lida: " + amostra.getCo2() + " ppm | Variacao maxima permitida: " + process.getMaxCO2() + " ppm \n";
                    msgTelegram += "CO2: " + amostra.getCo2() + " ppm - ";
                    isNecessary = 1;
                }
                if (amostra.getTvoc() > process.getMaxTVOC()) {
                    msg += "TVOC - Variacao lida: " + amostra.getTvoc() + " ppb | Variacao maxima permitida: " + process.getMaxTVOC() + " ppb \n";
                    msgTelegram += "TVOC: " + amostra.getTvoc() + " ppb - ";
                    isNecessary = 1;
                }
                if (amostra.getTemperatura() > process.getMaxTEMPERATURA()) {
                    msg += "Temperatura - Variacao lida: " + amostra.getTemperatura() + " ºC | Variacao maxima permitida: " + process.getMaxTEMPERATURA() + " ºC \n";
                    msgTelegram += "Temperatura: " + amostra.getTemperatura() + " Graus - ";
                    isNecessary = 1;
                }
                if (amostra.getUmidade() > process.getMaxUMIDADE()) {
                    msg += "Umidade - Variacao lida: " + amostra.getUmidade() + " % | Variacao maxima permitida: " + process.getMaxUMIDADE() + " % \n";
                    msgTelegram += "Umidade: " + amostra.getUmidade() + " (Relativa) - ";
                    isNecessary = 1;
                }
                if (amostra.getDb() > process.getMaxRUIDO()) {
                    msg += "Ruído - Variacao lida: " + amostra.getDb() + " dB | Variacao maxima permitida: " + process.getMaxRUIDO() + " dB \n";
                    msgTelegram += "Ruido: " + amostra.getDb() + " Db - ";
                    isNecessary = 1;
                }
                if (amostra.getLux() > process.getMaxLUMINOSIDADE()) {
                    msg += "Luminosidade - Variacao lida: " + amostra.getLux() + " lux | Variacao maxima permitida: " + process.getMaxLUMINOSIDADE() + " lux \n";
                    msgTelegram += "Luminosidade: " + amostra.getLux() + " lux";
                    isNecessary = 1;
                }

                if (isNecessary == 1) {
                    Thread.sleep(1000);

                    if (process.getBtoken() != null) {
                        System.out.println("Entrei no telegram.");
                        String urlString = "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s";
                        String apiToken = process.getBtoken();
                        String chatId = process.getChatId();
                        //String apiToken = "1403262308:AAF1zrbdz0-rEyXTdJUdT20MhA0eBpCT_TQ";
                        //String chatId = "1248387297";
                        String text = msg;

                        urlString = String.format(urlString, apiToken, chatId, msgTelegram);

                        URL url = new URL(urlString);

                        System.out.println("MINHA URL DE CONEXAO: " + urlString);
                        URLConnection conn = url.openConnection();

                        StringBuilder sb = new StringBuilder();
                        InputStream is = new BufferedInputStream(conn.getInputStream());
                        BufferedReader br = new BufferedReader(new InputStreamReader(is));
                        String inputLine = "";
                        while ((inputLine = br.readLine()) != null) {
                            sb.append(inputLine);
                        }
                        String response = sb.toString();
                    }
                    Thread.sleep(1000);
                }

            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }

        /*
        
        SELECT DISTINCT ON(id_dispositivos) id_dispositivos,* FROM amostragens INNER JOIN usuario ON id_projeto IN (select id_projeto from dispositivos where id = id_dispositivos) ORDER BY id_dispositivos,amostragens.id DESC 
        
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("airpureufg@gmail.com",
                        "xxxx");
            }
        });
        session.setDebug(true);

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("airpureufg@gmail.com"));
            //Remetente

            Address[] toUser = InternetAddress //Destinatário(s)
                    .parse("toinzimcommander@gmail.com");

            message.setRecipients(Message.RecipientType.TO, toUser);
            message.setSubject("teste");//Assunto
            message.setText("teste"); Transport.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }


        String urlString = "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s";

        String apiToken = "1403262308:AAF1zrbdz0-rEyXTdJUdT20MhA0eBpCT_TQ";
        String chatId = "1248387297";
        String text = "Hello world!";

        urlString = String.format(urlString, apiToken, chatId, text);

        URL url = new URL(urlString);
        URLConnection conn = url.openConnection();

        StringBuilder sb = new StringBuilder();
        InputStream is = new BufferedInputStream(conn.getInputStream());
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String inputLine = "";
        while ((inputLine = br.readLine()) != null) {
            sb.append(inputLine);
        }
        String response = sb.toString();
         */
        System.out.println("Finalizando notificações.");
    }
}

package br.ufg.airpure.controllers;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Properties;
import java.util.Random;

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
    @Schedule(second = "*/30", minute = "*", hour = "*", info = "Every 1 seconds", persistent = false)
    public void gera() throws MalformedURLException, IOException, AddressException, MessagingException {
        System.out.println("Gerando dados para o websocket...");
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
    }
}

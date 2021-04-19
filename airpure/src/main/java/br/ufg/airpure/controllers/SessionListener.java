/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.ufg.airpure.controllers;
import java.text.SimpleDateFormat;
import java.util.Date;
  
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
  
public class SessionListener implements HttpSessionListener {
     
  
    public void sessionCreated(HttpSessionEvent event) {        
         System.out.println("Sessão criada " + event.getSession().getId());
         event.getSession().setAttribute("login", "visitante");
         event.getSession().setAttribute("usuario", "visitante");
    }
  
    public void sessionDestroyed(HttpSessionEvent event) {     
         String ultimoAcesso = (new SimpleDateFormat("dd/MM/yyyy HH:mm:ss")).format(new Date(event.getSession().getLastAccessedTime()));
         System.out.println("Sessão expirada "+event.getSession().getId()+". Ultimo Acesso = "+ultimoAcesso);
    }
  
}
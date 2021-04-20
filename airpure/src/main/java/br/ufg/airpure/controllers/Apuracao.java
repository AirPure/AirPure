package br.ufg.airpure.controllers;

import java.util.ArrayList;
import java.util.Arrays;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ApplicationScoped
@ServerEndpoint(value = "/apuracao")
public class Apuracao {

	private static ArrayList<Session> sessions = new ArrayList<>();
	private String[][] ultimosDados = {};

	@OnMessage
	public void messageReceiver(String message) {
		System.out.println("Received message:" + message);
	}

	@OnOpen
	public void onOpen(Session session) {
		System.out.println("Conectando com: " + session.getId());
		sessions.add(session);
		System.out.println("CLientes conectados" + sessions.size());
	}

	@OnClose
	public void onClose(Session session) {
		System.out.println("Desconectando: " + session.getId());
		sessions.remove(session);
	}

	public String[][] getUltimosDados() {
		return ultimosDados;
	}

	public void novoStatus(String[][] dados) {
		System.out.println("Recebendo os ultimos dados");
		this.ultimosDados = dados;
		for (Session session : sessions) {
			session.getAsyncRemote().sendText(transform(dados));
		}
	}
	
	private String transform(String[][] dados) {
		String result = "[";
		
		for (String[] x : dados) {
			result += "[\""+x[0]+"\"" + "," + x[1] + "],";
		}
		return result.substring(0,result.length()-1) + "]";
	}
}

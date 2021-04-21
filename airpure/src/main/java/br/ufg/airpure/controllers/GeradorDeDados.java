package br.ufg.airpure.controllers;

import java.util.Random;

import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;

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
	 * 	[Huguinho, X]
	 *  [Zezinho, Y]
	 *  [Luizinho, Z]
	 * ]
	 * (onde X,Y e Z são números aleatórios entre 0 e 100)
	 * 
	 * E passa para o mecanismo de apuração
	 * 
	 */
	@Schedule(second = "*/30", minute = "*", hour = "*", info="Every 1 seconds", persistent=false) 
	public void gera(){
		System.out.println("Gerando dados para o websocket...");
		String[][] dados = new String[3][2];
		
		for(int i = 0; i< nomes.length; i++){
			dados[i] = new String[] {nomes[i], String.valueOf(random.nextInt(100))};
		}
		apuracao.novoStatus(dados);
	}
}

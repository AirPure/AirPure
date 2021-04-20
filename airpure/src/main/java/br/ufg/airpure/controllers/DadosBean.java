package br.ufg.airpure.controllers;

import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.primefaces.model.chart.PieChartModel;

import br.ufg.airpure.controllers.Apuracao;
import java.io.Serializable;

@Named
@ViewScoped
public class DadosBean implements Serializable{
	
	@Inject
	private Apuracao apuracao;
	
	private PieChartModel dados = new PieChartModel();;
	
	public String getDados() {
		
		System.out.println("Montando o gráfico...");
		
		String[][] ultimosDados = apuracao.getUltimosDados();
		String teste = "";
		for (String[] info : ultimosDados) {
			teste += info[0];
		}

                return teste;
	}

}
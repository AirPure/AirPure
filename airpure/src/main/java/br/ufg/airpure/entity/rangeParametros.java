package br.ufg.airpure.entity;

import java.io.Serializable;

public class rangeParametros implements Serializable {

   
    private Integer id; // PK
    private String tipo;    //Tipo de parametro
    private Float minimo;   //Valor minimo permitido
    private Float maximo;   //Valor maximo permitido
    private String norma; //Norma baseada
    private boolean eco2;
    private boolean co2;
    private boolean umidade;
    private boolean temperatura;
    private boolean tvoc;
    private boolean luminosidade;
    private boolean ruido;
    private boolean iaq;

    public boolean isIaq() {
        return iaq;
    }

    public void setIaq(boolean iaq) {
        this.iaq = iaq;
    }

    
    public boolean isEco2() {
        return eco2;
    }

    public void setEco2(boolean eco2) {
        this.eco2 = eco2;
    }

    public boolean isCo2() {
        return co2;
    }

    public void setCo2(boolean co2) {
        this.co2 = co2;
    }

    public boolean isUmidade() {
        return umidade;
    }

    public void setUmidade(boolean umidade) {
        this.umidade = umidade;
    }

    public boolean isTemperatura() {
        return temperatura;
    }

    public void setTemperatura(boolean temperatura) {
        this.temperatura = temperatura;
    }

    public boolean isTvoc() {
        return tvoc;
    }

    public void setTvoc(boolean tvoc) {
        this.tvoc = tvoc;
    }

    public boolean isLuminosidade() {
        return luminosidade;
    }

    public void setLuminosidade(boolean luminosidade) {
        this.luminosidade = luminosidade;
    }

    public boolean isRuido() {
        return ruido;
    }

    public void setRuido(boolean ruido) {
        this.ruido = ruido;
    }
    
    

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Float getMinimo() {
        return minimo;
    }

    public void setMinimo(Float minimo) {
        this.minimo = minimo;
    }

    public Float getMaximo() {
        return maximo;
    }

    public void setMaximo(Float maximo) {
        this.maximo = maximo;
    }

    public String getNorma() {
        return norma;
    }

    public void setNorma(String norma) {
        this.norma = norma;
    }
  
    
}

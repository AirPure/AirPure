package br.ufg.airpure.entity;

import java.io.Serializable;

public class rangeParametros implements Serializable {

   
    private Integer id; // PK
    private String tipo;    //Tipo de parametro
    private Float minimo;   //Valor minimo permitido
    private Float maximo;   //Valor maximo permitido
    private String norma; //Norma baseada

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

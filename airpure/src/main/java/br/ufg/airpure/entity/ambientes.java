package br.ufg.airpure.entity;

import java.io.Serializable;

public class ambientes implements Serializable {

    private Integer id; //PK
    private String sala;   //Nome da sala
    private String predio; //Nome do predio
    private String local; //Nome do local
    private String equipamentos; //Nome dos equipamentos instalados
    private String dimensao; //Nome dos equipamentos instalados
    private String capacidadeMaxima; //Nome dos equipamentos instalados

    public String getDimensao() {
        return dimensao;
    }

    public void setDimensao(String dimensao) {
        this.dimensao = dimensao;
    }

    public String getCapacidadeMaxima() {
        return capacidadeMaxima;
    }

    public void setCapacidadeMaxima(String capacidadeMaxima) {
        this.capacidadeMaxima = capacidadeMaxima;
    }
    

    public String getEquipamentos() {
        return equipamentos;
    }

    public void setEquipamentos(String equipamentos) {
        this.equipamentos = equipamentos;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public String getPredio() {
        return predio;
    }

    public void setPredio(String predio) {
        this.predio = predio;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }
    
    

}

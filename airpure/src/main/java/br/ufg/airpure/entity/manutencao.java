package br.ufg.airpure.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class manutencao implements Serializable {

    private Integer id; //PK
    private String data_execucao;   //Nome da sala
    private Timestamp data_execucaots;   //Nome da sala
    private String proxima_execucao; //Nome do predio
    private String servicos; //Nome do local
    private String id_hvac; //Nome dos equipamentos instalados
    private String executor; //Nome dos equipamentos instalados
    private String tipo; //Nome dos equipamentos instalados
    private String Sala; //Nome dos equipamentos instalados

    public Timestamp getData_execucaots() {
        return data_execucaots;
    }

    public void setData_execucaots(Timestamp data_execucaots) {
        this.data_execucaots = data_execucaots;
    }

    
    public String getSala() {
        return Sala;
    }

    public void setSala(String Sala) {
        this.Sala = Sala;
    }

    
    
    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getData_execucao() {
        return data_execucao;
    }

    public void setData_execucao(String data_execucao) {
        this.data_execucao = data_execucao;
    }

    public String getProxima_execucao() {
        return proxima_execucao;
    }

    public void setProxima_execucao(String proxima_execucao) {
        this.proxima_execucao = proxima_execucao;
    }

    public String getServicos() {
        return servicos;
    }

    public void setServicos(String servicos) {
        this.servicos = servicos;
    }

    public String getId_hvac() {
        return id_hvac;
    }

    public void setId_hvac(String id_hvac) {
        this.id_hvac = id_hvac;
    }

    public String getExecutor() {
        return executor;
    }

    public void setExecutor(String executor) {
        this.executor = executor;
    }

    

}

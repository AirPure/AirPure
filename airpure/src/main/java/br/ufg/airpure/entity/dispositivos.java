package br.ufg.airpure.entity;

import java.io.Serializable;

public class dispositivos implements Serializable {

    private Integer id; //PK
    private projetos projeto;   //Nome do projeto
    private ambientes ambiente; //Nome do ambiente

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public projetos getProjeto() {
        return projeto;
    }

    public void setProjeto(projetos projeto) {
        this.projeto = projeto;
    }

    public ambientes getAmbiente() {
        return ambiente;
    }

    public void setAmbiente(ambientes ambiente) {
        this.ambiente = ambiente;
    }
    
    


}

package br.ufg.airpure.entity;

import java.io.Serializable;

public class dispositivos implements Serializable {

    private Integer id; //PK
    private projetos projeto;   //Nome do projeto
    private ambientes ambiente; //Nome do ambiente
    private String nome; //Nome do ambiente

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

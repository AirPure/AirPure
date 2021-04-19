package br.ufg.airpure.entity;

import java.io.Serializable;

public class projetos implements Serializable {

    private Integer id; //PK
    private String nome; //Nome do projeto

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    

    

}

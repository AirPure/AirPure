package br.ufg.airpure.entity;

import java.io.Serializable;

public class dispositivos implements Serializable {

    private Integer id; //PK
    private projetos projeto;   //Nome do projeto
    private ambientes ambiente; //Nome do ambiente
    private String nome; //Nome do ambiente
    private String localizacao; //Nome do ambiente
    private Integer id_projeto; //Nome do ambiente
    private Integer id_ambiente; //Nome do ambiente
    private String ambiente1; //Nome do ambiente

    public String getAmbiente1() {
        return ambiente1;
    }

    public void setAmbiente1(String ambiente1) {
        this.ambiente1 = ambiente1;
    }
    
    

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }
    
    
    public Integer getId_projeto() {
        return id_projeto;
    }

    public void setId_projeto(Integer id_projeto) {
        this.id_projeto = id_projeto;
    }

    public Integer getId_ambiente() {
        return id_ambiente;
    }

    public void setId_ambiente(Integer id_ambiente) {
        this.id_ambiente = id_ambiente;
    }

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

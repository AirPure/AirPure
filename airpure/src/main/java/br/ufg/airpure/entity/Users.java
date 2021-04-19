package br.ufg.airpure.entity;

import java.io.Serializable;


public class Users implements Serializable {

    private Integer id; //Identificador PK.
    private String login;   //Login do usuário.
    private String hash;    //Senha do usuário.
    private String nome; //Nome do usuario
    private String organizacao;     //Organizacao do usuario
    private String email; //Email do usuario
    private String chatId; //Telegram
    private String btoken;  //Telegram
    private projetos projeto;   //Projeto relacionado

    public projetos getProjeto() {
        return projeto;
    }

    public void setProjeto(projetos projeto) {
        this.projeto = projeto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getOrganizacao() {
        return organizacao;
    }

    public void setOrganizacao(String organizacao) {
        this.organizacao = organizacao;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getChatId() {
        return chatId;
    }

    public void setChatId(String chatId) {
        this.chatId = chatId;
    }

    public String getBtoken() {
        return btoken;
    }

    public void setBtoken(String btoken) {
        this.btoken = btoken;
    }
   
    public Users() {
    }

    public Users(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    
}

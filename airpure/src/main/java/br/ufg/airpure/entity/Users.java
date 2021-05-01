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
    private float minECO2;
    private float minCO2;
    private float minTVOC;
    private float minUMIDADE;
    private float minTEMPERATURA;
    private float minRUIDO;
    private float minLUMINOSIDADE;
    private float maxECO2;
    private float maxCO2;
    private float maxTVOC;
    private float maxUMIDADE;
    private float maxTEMPERATURA;
    private float maxRUIDO;
    private float maxLUMINOSIDADE;

    public float getMinECO2() {
        return minECO2;
    }

    public void setMinECO2(float minECO2) {
        this.minECO2 = minECO2;
    }

    public float getMinCO2() {
        return minCO2;
    }

    public void setMinCO2(float minCO2) {
        this.minCO2 = minCO2;
    }

    public float getMinTVOC() {
        return minTVOC;
    }

    public void setMinTVOC(float minTVOC) {
        this.minTVOC = minTVOC;
    }

    public float getMinUMIDADE() {
        return minUMIDADE;
    }

    public void setMinUMIDADE(float minUMIDADE) {
        this.minUMIDADE = minUMIDADE;
    }

    public float getMinTEMPERATURA() {
        return minTEMPERATURA;
    }

    public void setMinTEMPERATURA(float minTEMPERATURA) {
        this.minTEMPERATURA = minTEMPERATURA;
    }

    public float getMinRUIDO() {
        return minRUIDO;
    }

    public void setMinRUIDO(float minRUIDO) {
        this.minRUIDO = minRUIDO;
    }

    public float getMinLUMINOSIDADE() {
        return minLUMINOSIDADE;
    }

    public void setMinLUMINOSIDADE(float minLUMINOSIDADE) {
        this.minLUMINOSIDADE = minLUMINOSIDADE;
    }

    public float getMaxECO2() {
        return maxECO2;
    }

    public void setMaxECO2(float maxECO2) {
        this.maxECO2 = maxECO2;
    }

    public float getMaxCO2() {
        return maxCO2;
    }

    public void setMaxCO2(float maxCO2) {
        this.maxCO2 = maxCO2;
    }

    public float getMaxTVOC() {
        return maxTVOC;
    }

    public void setMaxTVOC(float maxTVOC) {
        this.maxTVOC = maxTVOC;
    }

    public float getMaxUMIDADE() {
        return maxUMIDADE;
    }

    public void setMaxUMIDADE(float maxUMIDADE) {
        this.maxUMIDADE = maxUMIDADE;
    }

    public float getMaxTEMPERATURA() {
        return maxTEMPERATURA;
    }

    public void setMaxTEMPERATURA(float maxTEMPERATURA) {
        this.maxTEMPERATURA = maxTEMPERATURA;
    }

    public float getMaxRUIDO() {
        return maxRUIDO;
    }

    public void setMaxRUIDO(float maxRUIDO) {
        this.maxRUIDO = maxRUIDO;
    }

    public float getMaxLUMINOSIDADE() {
        return maxLUMINOSIDADE;
    }

    public void setMaxLUMINOSIDADE(float maxLUMINOSIDADE) {
        this.maxLUMINOSIDADE = maxLUMINOSIDADE;
    }
    
    

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

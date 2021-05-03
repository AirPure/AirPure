package br.ufg.airpure.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

public class amostragens implements Serializable {

    private Long id;    //PK
    private Timestamp data; //Timestamp do registro
    private Float tvoc; //Valor lido de TVOC
    private Float eco2; //Valor lido de ECO2
    private Float co2; //Valor lido de CO2
    private Float iaqco2; //Valor lido de CO2
    private Float lux; //Valor lido de LUX
    private Float db; //Valor lido de RUIDO
    private Float umidade; //Valor lido de UMIDADE
    private Float temperatura; //Valor lido de TEMPERATURA
    private Float iaq; //Valor calculado do IAQ
    private int V_FIRMWARE; //Valor referente a versao do firmware
    private dispositivos airpure; //Airpure relacionado

    public Float getIaqco2() {
        return iaqco2;
    }

    public void setIaqco2(Float iaqco2) {
        this.iaqco2 = iaqco2;
    }

    
    public dispositivos getAirpure() {
        return airpure;
    }

    public void setAirpure(dispositivos airpure) {
        this.airpure = airpure;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getData() {
        return data;
    }

    public void setData(Timestamp data) {
        this.data = data;
    }

    public Float getTvoc() {
        return tvoc;
    }

    public void setTvoc(Float tvoc) {
        this.tvoc = tvoc;
    }

    public Float getEco2() {
        return eco2;
    }

    public void setEco2(Float eco2) {
        this.eco2 = eco2;
    }

    public Float getCo2() {
        return co2;
    }

    public void setCo2(Float co2) {
        this.co2 = co2;
    }

    public Float getLux() {
        return lux;
    }

    public void setLux(Float lux) {
        this.lux = lux;
    }

    public Float getDb() {
        return db;
    }

    public void setDb(Float db) {
        this.db = db;
    }

    public Float getUmidade() {
        return umidade;
    }

    public void setUmidade(Float umidade) {
        this.umidade = umidade;
    }

    public Float getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(Float temperatura) {
        this.temperatura = temperatura;
    }

    public Float getIaq() {
        return iaq;
    }

    public void setIaq(Float iaq) {
        this.iaq = iaq;
    }

    public int getV_FIRMWARE() {
        return V_FIRMWARE;
    }

    public void setV_FIRMWARE(int V_FIRMWARE) {
        this.V_FIRMWARE = V_FIRMWARE;
    }


}

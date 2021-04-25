package br.ufg.airpure.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class estatistica implements Serializable {

    private Long id;    //PK
    private Timestamp data; //Timestamp do registro
    private Float tvocMedia; //Valor lido de TVOC
    private Float tvocMin; //Valor lido de TVOC
    private Float tvocMax; //Valor lido de TVOC
    private Float eco2Media; //Valor lido de ECO2
    private Float eco2Min; //Valor lido de ECO2
    private Float eco2Max; //Valor lido de ECO2
    private Float co2Min; //Valor lido de CO2
    private Float co2Max; //Valor lido de CO2
    private Float co2Media; //Valor lido de CO2
    private Float luxMax; //Valor lido de LUX
    private Float luxMin; //Valor lido de LUX
    private Float luxMedia; //Valor lido de LUX
    private Float dbMin; //Valor lido de RUIDO
    private Float dbMax; //Valor lido de RUIDO
    private Float dbMedia; //Valor lido de RUIDO
    private Float umidadeMin; //Valor lido de UMIDADE
    private Float umidadeMax; //Valor lido de UMIDADE
    private Float umidadeMedia; //Valor lido de UMIDADE
    private Float temperaturaMin; //Valor lido de TEMPERATURA
    private Float temperaturaMax; //Valor lido de TEMPERATURA
    private Float temperaturaMedia; //Valor lido de TEMPERATURA
    private dispositivos airpure; //Airpure relacionado

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

    public Float getTvocMedia() {
        return tvocMedia;
    }

    public void setTvocMedia(Float tvocMedia) {
        this.tvocMedia = tvocMedia;
    }

    public Float getTvocMin() {
        return tvocMin;
    }

    public void setTvocMin(Float tvocMin) {
        this.tvocMin = tvocMin;
    }

    public Float getTvocMax() {
        return tvocMax;
    }

    public void setTvocMax(Float tvocMax) {
        this.tvocMax = tvocMax;
    }

    public Float getEco2Media() {
        return eco2Media;
    }

    public void setEco2Media(Float eco2Media) {
        this.eco2Media = eco2Media;
    }

    public Float getEco2Min() {
        return eco2Min;
    }

    public void setEco2Min(Float eco2Min) {
        this.eco2Min = eco2Min;
    }

    public Float getEco2Max() {
        return eco2Max;
    }

    public void setEco2Max(Float eco2Max) {
        this.eco2Max = eco2Max;
    }

    public Float getCo2Min() {
        return co2Min;
    }

    public void setCo2Min(Float co2Min) {
        this.co2Min = co2Min;
    }

    public Float getCo2Max() {
        return co2Max;
    }

    public void setCo2Max(Float co2Max) {
        this.co2Max = co2Max;
    }

    public Float getCo2Media() {
        return co2Media;
    }

    public void setCo2Media(Float co2Media) {
        this.co2Media = co2Media;
    }

    public Float getLuxMax() {
        return luxMax;
    }

    public void setLuxMax(Float luxMax) {
        this.luxMax = luxMax;
    }

    public Float getLuxMin() {
        return luxMin;
    }

    public void setLuxMin(Float luxMin) {
        this.luxMin = luxMin;
    }

    public Float getLuxMedia() {
        return luxMedia;
    }

    public void setLuxMedia(Float luxMedia) {
        this.luxMedia = luxMedia;
    }

    public Float getDbMin() {
        return dbMin;
    }

    public void setDbMin(Float dbMin) {
        this.dbMin = dbMin;
    }

    public Float getDbMax() {
        return dbMax;
    }

    public void setDbMax(Float dbMax) {
        this.dbMax = dbMax;
    }

    public Float getDbMedia() {
        return dbMedia;
    }

    public void setDbMedia(Float dbMedia) {
        this.dbMedia = dbMedia;
    }

    public Float getUmidadeMin() {
        return umidadeMin;
    }

    public void setUmidadeMin(Float umidadeMin) {
        this.umidadeMin = umidadeMin;
    }

    public Float getUmidadeMax() {
        return umidadeMax;
    }

    public void setUmidadeMax(Float umidadeMax) {
        this.umidadeMax = umidadeMax;
    }

    public Float getUmidadeMedia() {
        return umidadeMedia;
    }

    public void setUmidadeMedia(Float umidadeMedia) {
        this.umidadeMedia = umidadeMedia;
    }

    public Float getTemperaturaMin() {
        return temperaturaMin;
    }

    public void setTemperaturaMin(Float temperaturaMin) {
        this.temperaturaMin = temperaturaMin;
    }

    public Float getTemperaturaMax() {
        return temperaturaMax;
    }

    public void setTemperaturaMax(Float temperaturaMax) {
        this.temperaturaMax = temperaturaMax;
    }

    public Float getTemperaturaMedia() {
        return temperaturaMedia;
    }

    public void setTemperaturaMedia(Float temperaturaMedia) {
        this.temperaturaMedia = temperaturaMedia;
    }

    public dispositivos getAirpure() {
        return airpure;
    }

    public void setAirpure(dispositivos airpure) {
        this.airpure = airpure;
    }
    
    
}
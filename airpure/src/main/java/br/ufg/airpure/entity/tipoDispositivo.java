package br.ufg.airpure.entity;

import java.io.Serializable;
import java.math.BigInteger;

public class tipoDispositivo implements Serializable {

    private Long id;    //PK
    private boolean mhz14a; //Sensor de CO2
    private boolean ccs811; //Sensor de TVOC
    private boolean dht22;  //Sensor de umidade e temperatura
    private boolean max9814;  //Sensor de Ruido
    private boolean bh1750; //Sensor de Luminosidade
    private dispositivos airpure; //Dispositivo

    public Long getId() {
        return id;
    }

    public dispositivos getAirpure() {
        return airpure;
    }

    public void setAirpure(dispositivos airpure) {
        this.airpure = airpure;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isMhz14a() {
        return mhz14a;
    }

    public void setMhz14a(boolean mhz14a) {
        this.mhz14a = mhz14a;
    }

    public boolean isCcs811() {
        return ccs811;
    }

    public void setCcs811(boolean ccs811) {
        this.ccs811 = ccs811;
    }

    public boolean isDht22() {
        return dht22;
    }

    public void setDht22(boolean dht22) {
        this.dht22 = dht22;
    }

    public boolean isMax9814() {
        return max9814;
    }

    public void setMax9814(boolean max9814) {
        this.max9814 = max9814;
    }

    public boolean isBh1750() {
        return bh1750;
    }

    public void setBh1750(boolean bh1750) {
        this.bh1750 = bh1750;
    }

}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.ufg.airpure.controllers;

import java.util.Date;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author Mecânica
 */
@ManagedBean
public class chartRecord {
 
    protected String x_value;
    protected Double y_value;
 
    public String getx_value() {
        return x_value;
    }
 
    public void setx_value(String x_value) {
        this.x_value = x_value;
    }
 
    public Double gety_value() {
        return y_value;
    }
 
    public void sety_value(Double y_value) {
        this.y_value = y_value;
    }
 
    public chartRecord() {
    }
 
    public chartRecord(String x_value, Double y_value) {
        this.x_value = x_value;
        this.y_value = y_value;
    }
}
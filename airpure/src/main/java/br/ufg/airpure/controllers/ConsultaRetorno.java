package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.amostragens;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
import org.primefaces.event.SelectEvent;

@ManagedBean(name = "consultaRetorno")
@RequestScoped
public class ConsultaRetorno { 
    private Date date4;
    private Date date5;
    private String dateSel1, dateSel2, dConsulta1, dConsulta2;
    private String dispConsulta;
    protected List<chartRecord> registro1;
    protected List<chartRecord> registro3;
    protected List<chartRecord> registro2;
    protected List<chartRecord> registro4;
    protected List<chartRecord> registro5;
    protected List<chartRecord> registro6;
    protected List<chartRecord> registro7;
    protected List<chartRecord> registro8;

//<------------------------------------------------------------Getter's and setter's--------------------------------------------------------------------------->
    public List<chartRecord> getRegistro1() {
        return registro1;
    }

    public List<chartRecord> getRegistro2() {
        return registro2;
    }

    public List<chartRecord> printTextgetRegistro3() {
        return registro3;
    }
    
    public void setRegistro3(List<chartRecord> registro3) {
        this.registro3 = registro3;
    }

    public List<chartRecord> getRegistro3() {
        return registro3;
    }

    public List<chartRecord> getRegistro4() {
        return registro4;
    }

    public List<chartRecord> getRegistro5() {
        return registro5;
    }

    public void setRegistro5(List<chartRecord> registro5) {
        this.registro5 = registro5;
    }

    public List<chartRecord> getRegistro6() {
        return registro6;
    }

    public void setRegistro6(List<chartRecord> registro6) {
        this.registro6 = registro6;
    }

    public List<chartRecord> getRegistro7() {
        return registro7;
    }

    public void setRegistro7(List<chartRecord> registro7) {
        this.registro7 = registro7;
    }

    public List<chartRecord> getRegistro8() {
        return registro8;
    }

    public void setRegistro8(List<chartRecord> registro8) {
        this.registro8 = registro8;
    }

    public Date getDate4() {
        return date4;
    }

    public void setDate4(Date date4) {
        this.date4 = date4;
    }

    public String getDateSel1() {
        return dateSel1;
    }

    public void setDateSel1(String dateSel1) {
        this.dateSel1 = dateSel1;
    }

    public String getDateSel2() {
        return dateSel2;
    }

    public void setDateSel2(String dateSel2) {
        this.dateSel2 = dateSel2;
    }

    public String getdConsulta1() {
        return dConsulta1;
    }

    public void setdConsulta1(String dConsulta1) {
        this.dConsulta1 = dConsulta1;
    }

    public String getdConsulta2() {
        return dConsulta2;
    }

    public void setdConsulta2(String dConsulta2) {
        this.dConsulta2 = dConsulta2;
    }

    public String getDispConsulta() {
        return dispConsulta;
    }

    public void setDispConsulta(String dispConsulta) {
        this.dispConsulta = dispConsulta;
    }
    
    
    
    public void dataSelecionada1(SelectEvent<Date> event){
        FacesContext facesContext = FacesContext.getCurrentInstance();
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat format2 = new SimpleDateFormat("yyyy/MM/dd");
        dConsulta1 = format2.format(event.getObject());
        dateSel1 = format.format(event.getObject());
    }
    
    public void dataSelecionada2(SelectEvent<Date> event){
        FacesContext facesContext = FacesContext.getCurrentInstance();
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat format2 = new SimpleDateFormat("yyyy/MM/dd");
        dConsulta2 = format2.format(event.getObject());
        this.dateSel2 = format.format(event.getObject());
    }
    
    public Date getDate5() {
        return date5;
    }

    public void setDate5(Date date5) {
        this.date5 = date5;
    }
    
    public String getdispConsulta(){
        return(dispConsulta);
    }
    
    public void setdispConsulta(String dispConsulta){
        this.dispConsulta = dispConsulta;
    }

//A parte do código abaixo é responsável por fazer a recuperação dos dados das membranas do banco de dados, que serão adicionados a arraylists e por sua vez serão usados nos gráficos.
//<------------------------------------------------------------------------MEMBRANA 1--------------------------------------------------------------->
    public void formatandoData(){
        if(dateSel1.compareTo(dateSel2) < 0 || dateSel1.compareTo(dateSel2) == 0){
            this.setDateSel1(dateSel1 +  " 00:00:00");
            this.setdConsulta1(dConsulta1 +  " 00:00:00");
            this.setDateSel2(dateSel2 + " 23:59:59");
            this.setdConsulta2(dConsulta2 + " 23:59:59");
        }
        else{
            String aux;
            
            aux = dateSel1;
            dateSel1 = dateSel2;
            dateSel2 = aux;
            
            aux = dConsulta1;
            dConsulta1 = dConsulta2;
            dConsulta2 = aux;
            
            this.setDateSel2(dateSel1 +  " 00:00:00");
            this.setdConsulta1(dConsulta1 +  " 00:00:00");
            this.setDateSel2(dateSel2 + " 23:59:59");
            this.setdConsulta2(dConsulta2 + " 23:59:59");
        }
    }
    
    public void dadosConsulta() {
        this.formatandoData();
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Dispositivo: " + dispConsulta + " - Período: "  + dateSel1 + " a " + dateSel2));
    }
    
    public ConsultaRetorno() {
        reload();
    }

    public void reload() {
        if (registro1 != null) {

        } else {
            String x_value;
            Double y_value;
            registro1 = new ArrayList<>();
            registro2 = new ArrayList<>();
            registro3 = new ArrayList<>();
            registro4 = new ArrayList<>();
            registro5 = new ArrayList<>();
            registro6 = new ArrayList<>();
            registro7 = new ArrayList<>();
            registro8 = new ArrayList<>();
            
            Main.db = null;
            BD.ConectarBD();
            Main.db = null;
            BD.ConectarBD();
            
            String sql = "SELECT * FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE nome ILIKE '" + dispConsulta + "') AND data BETWEEN '" + dConsulta1 + "' AND '" + dConsulta2 + "' ORDER BY id ASC;";

            try {
                Main.sql = Main.db.createStatement();
            } catch (SQLException e) {
            }
            ResultSet rs;
            try {
                rs = Main.sql.executeQuery(sql);
                System.out.println(sql);

                while (rs.next()) {
                    x_value = (rs.getString("data"));
                    y_value = (rs.getDouble("co2"));
                    registro1.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("eco2"));
                    registro2.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("temperatura"));
                    registro3.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("umidade"));
                    registro4.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("db"));
                    registro5.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("lux"));
                    registro6.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("tvoc"));
                    registro7.add(new chartRecord((x_value), y_value));
                    y_value = (rs.getDouble("iaq"));
                    registro8.add(new chartRecord((x_value), y_value));
                }

                rs.close();
            } catch (SQLException e) {
            }
        }

    }

//<-------------------------------------------------------------------------------------------------------------------------------------> 
}

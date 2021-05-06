package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.amostragens;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

@ManagedBean
@RequestScoped
public class ChartView1 {

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



//A parte do código abaixo é responsável por fazer a recuperação dos dados das membranas do banco de dados, que serão adicionados a arraylists e por sua vez serão usados nos gráficos.
//<------------------------------------------------------------------------MEMBRANA 1--------------------------------------------------------------->
    public ChartView1() {
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
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            String startpoint = (String) session.getAttribute("startPoint");
            String endpoint = (String) session.getAttribute("endPoint");
            Main.db = null;
            BD.ConectarBD();
            String idProjetoRelacionado = (String) session.getAttribute("filtroAirPure");
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT * FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE nome ILIKE '" + idProjetoRelacionado + "') AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "' ORDER BY id ASC;";

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

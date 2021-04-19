package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.tipoDispositivo;
import br.ufg.airpure.entity.amostragens;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
import java.awt.Color;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;
import org.json.*;
import javax.annotation.PostConstruct;
import javax.faces.context.ExternalContext;
import javax.servlet.http.HttpServletRequest;
import org.primefaces.PrimeFaces;

@ViewScoped
@ManagedBean(name = "requestdata1")
public class RequestData1 {

    ArrayList<amostragens> registro1;

    @PostConstruct
    public void init() {    //Metodo construtor

    }

    // <===========Método que retorna todos os dados do último registro de cada Airpure ligado ao seu projeto.=========================================================================================================================>
    public ArrayList<amostragens> returnLastSample() {
        if (registro1 != null) {
            return registro1;
        }
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        registro1 = new ArrayList<amostragens>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY id DESC LIMIT 1;";

        try {
            Main.sql = Main.db.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();

        }

        ResultSet rs = null;
        try {

            rs = Main.sql.executeQuery(sql);
            System.out.println(sql);
            while (rs.next()) {
                amostragens process = new amostragens();
                process.setId(rs.getLong("id"));
                process.setCo2(rs.getFloat("co2"));
                process.setEco2(rs.getFloat("eco2"));
                process.setData(rs.getTimestamp("data"));
                process.setDb(rs.getFloat("db"));
                process.setLux(rs.getFloat("lux"));
                process.setTemperatura(rs.getFloat("temperatura"));
                process.setTvoc(rs.getFloat("tvoc"));
                process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));
                try{
                process.getData().setHours(process.getData().getHours() - 3);
                } catch (NullPointerException E){
                    E.printStackTrace();
                }
                registro1.add(process);
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }

        return registro1;
    }
// <============================================================================================================================================================================>
}

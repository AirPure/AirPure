package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.tipoDispositivo;
import br.ufg.airpure.entity.amostragens;
import br.ufg.airpure.entity.dispositivos;
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
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
import java.util.regex.Pattern;
import org.json.*;
import javax.annotation.PostConstruct;
import javax.faces.context.ExternalContext;
import javax.servlet.http.HttpServletRequest;
import org.primefaces.PrimeFaces;

@ViewScoped
@ManagedBean(name = "requestdata2")
public class RequestData2 {

    ArrayList<amostragens> registro1;
    ArrayList<dispositivos> registro_id;
    
    String inicio;
    String fim;
    static String idOfAirpures;

    public String getIdOfAirpures() {
        return idOfAirpures;
    }

    public void setIdOfAirpures(String idOfAirpures) {
        RequestData1.idOfAirpures = idOfAirpures;
    }

    public String getInicio() {
        return inicio;
    }

    public void setInicio(String inicio) {
        this.inicio = inicio;
    }

    public String getFim() {
        return fim;
    }

    public void setFim(String fim) {
        this.fim = fim;
    }

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
                process.setUmidade(rs.getFloat("umidade"));
                process.setTvoc(rs.getFloat("tvoc"));
                process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));
                try {
                    process.getData().setHours(process.getData().getHours() - 3);
                } catch (NullPointerException E) {
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

  
        // <===========Método que retorna todos os dados do último registro de cada Airpure ligado ao seu projeto.=========================================================================================================================>
    public ArrayList<dispositivos> returnID() {
        
        registro_id = new ArrayList<dispositivos>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM dispositivos;";
        
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
                dispositivos process = new dispositivos();
                process.setId(rs.getInt("id"));
                registro_id.add(process);
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }

        return registro_id;
    }
    
        // <===========Método que retorna todos os dados do último registro de cada Airpure ligado ao seu projeto.=========================================================================================================================>
    public ArrayList<amostragens> returnLastSampleBYID(int id_dispositivo) {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        registro1 = new ArrayList<amostragens>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM amostragens WHERE id_dispositivos ="+id_dispositivo+" ORDER BY id DESC LIMIT 1;";

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
                process.setUmidade(rs.getFloat("umidade"));
                process.setTvoc(rs.getFloat("tvoc"));
                process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));
                try {
                    process.getData().setHours(process.getData().getHours() - 3);
                } catch (NullPointerException E) {
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
    
    
    // <===========Método de inserção modelo ao banco de dados.=========================================================================================================================>
    public void insertDatabase() {
        Main.db = null;
        BD.ConectarBD();
        String sql = "INSERT INTO range (tipo,minimo,maximo,norma) VALUES ('TVOC',0,300,'NR-17');";

        try {
            Main.sql = Main.db.createStatement();
        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {

            Main.sql.executeUpdate(sql);
            System.out.println(sql);

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }

    }

    // <===========Retorna a data do utlimo registro do projeto. =========================================================================================================================>
    public String ultimoRegistroData() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        String data = "", hora = "";
        Timestamp dataAux;
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT data FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY id DESC LIMIT 1;";

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
                dataAux = rs.getTimestamp("data");
                dataAux.setHours(dataAux.getHours() - 3);
                data = new SimpleDateFormat("dd/MM/yyyy").format(dataAux);
                hora = new SimpleDateFormat("HH:mm:ss").format(dataAux);

            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }

        return "Último registro: " + data + " " + hora;
    }
    
    public String ultimoRegistroDadosID(int id_dispositivo) {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        String data = "", hora = "", id = "", local = "";
        Timestamp dataAux;
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT data, (SELECT sala FROM ambientes WHERE id IN (select id_ambientes FROM dispositivos WHERE id = " + id_dispositivo + ")) FROM amostragens WHERE id_dispositivos = "+id_dispositivo+" ORDER BY id DESC LIMIT 1";
           
        try {Main.sql = Main.db.createStatement();} catch (SQLException e) {e.printStackTrace();}

        ResultSet rs = null;
        try {
            rs = Main.sql.executeQuery(sql);
            System.out.println(sql);
            while (rs.next()) {
                dataAux = rs.getTimestamp("data");
                local = rs.getString("sala");
                dataAux.setHours(dataAux.getHours() - 3);
                data = new SimpleDateFormat("dd/MM/yyyy").format(dataAux);
                hora = new SimpleDateFormat("HH:mm:ss").format(dataAux);
            }
        } catch (SQLException e) {e.printStackTrace();}
        try { Main.db.close();} catch (SQLException ex) {Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);}

        return "ID: "+id_dispositivo+" \n\n Local: "+local+ " | Último envio: " + data + " " + hora;
    }

    // <===========Atribui algum parametro a sessao do usuario (URL) =========================================================================================================================>
    public String putItOnSession(int id) throws InterruptedException {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.setAttribute("register", id);
            FacesContext.getCurrentInstance().getExternalContext().redirect("homePage.xhtml?smp_id=" + id);
        } catch (Exception ex) {
            System.out.println("Error...");
        }
        return "505.xhtml";
    }
    // <===========Remove o filtro de data do projeto. =========================================================================================================================>

    public String noFilterDatatable() throws InterruptedException {
        Date data = new Date(System.currentTimeMillis());
        Date data2 = new Date(System.currentTimeMillis());
        data.setDate(data.getDate() + 2);
        data2.setDate(data2.getDate() - 2);
        SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.setAttribute("endPoint", formatarDate.format(data));
            session.setAttribute("startPoint", formatarDate.format(data2));
            FacesContext.getCurrentInstance().getExternalContext().redirect("");
        } catch (Exception ex) {
        }
        return "505.xhtml";

    }
    // <===========Retorna o período de análise do filtro.=========================================================================================================================>

    public String time() {

        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        String startpoint = (String) session.getAttribute("startPoint");
        String endpoint = (String) session.getAttribute("endPoint");
        return "(" + startpoint + " - " + endpoint + ")";

    }
    // <===========Altera o periodo do filtro inserido pelo usuario =========================================================================================================================>

    public String datatableFilterData() throws InterruptedException {

        try {
            String inicioAux = "";
            String fimAux = "";
            String aux[];

            aux = inicio.split(Pattern.quote("/"));
            int valor = Integer.parseInt(aux[0]);
            inicioAux = aux[2] + "/" + aux[1] + "/" + valor;

            aux = fim.split(Pattern.quote("/"));
            fimAux = aux[2] + "/" + aux[1] + "/" + (aux[0]);

            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.setAttribute("endPoint", fimAux);
            session.setAttribute("startPoint", inicioAux);
            FacesContext.getCurrentInstance().getExternalContext().redirect("");
        } catch (Exception ex) {

        }
        return "505.xhtml";

    }

    public String returnColorParam(Float value, String param) {
               String color = "";
               int minimo = 0;
               int maximo = 0;
               Main.db = null;
               BD.ConectarBD();
               String sql = "SELECT minimo,maximo FROM range WHERE tipo = '" + param + "';";

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
                       minimo = rs.getInt("minimo");
                       maximo = rs.getInt("maximo");
                   }

               } catch (SQLException e) {
                   e.printStackTrace();

               }
               try {
                   Main.db.close();
               } catch (SQLException ex) {
                   Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

               }

               if (value > minimo && value < maximo) {
                   return "#4CAF50";
               } else if (value < minimo) {
                   return "#FF9800";
               } else {
                   return "#F44336";
               }


       }



// <============================================================================================================================================================================>
}

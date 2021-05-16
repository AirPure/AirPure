package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.ambientes;
import br.ufg.airpure.entity.tipoDispositivo;
import br.ufg.airpure.entity.amostragens;
import br.ufg.airpure.entity.dispositivos;
import br.ufg.airpure.entity.estatistica;
import br.ufg.airpure.entity.manutencao;
import br.ufg.airpure.entity.rangeParametros;
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
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.TimeZone;
import java.util.regex.Pattern;
import org.json.*;
import javax.annotation.PostConstruct;
import javax.faces.context.ExternalContext;
import javax.servlet.http.HttpServletRequest;
import org.primefaces.PrimeFaces;

@ViewScoped
@ManagedBean(name = "requestdata3")
public class RequestData3 {

    ArrayList<amostragens> registro1;
    ArrayList<ambientes> registro2;
    ArrayList<amostragens> registro3;
    ArrayList<amostragens> registro4;
    ArrayList<dispositivos> registro5;
    ArrayList<estatistica> registro6;
    ArrayList<manutencao> registro7;
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
    public ArrayList<amostragens> returnLastSample(int id) {
        try {
            registro1 = new ArrayList<amostragens>();
            Main.db = null;
            BD.ConectarBD();
            //String sql = "SELECT DISTINCT ON (id_dispositivos) id_dispositivos,* FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado +") ORDER BY id_dispositivos,id DESC;";
            String sql = "SELECT * FROM amostragens INNER JOIN ambientes ON ambientes.id IN (SELECT id_ambientes FROM dispositivos WHERE dispositivos.id = id_dispositivos) WHERE id_dispositivos = " + id + " ORDER BY amostragens.id DESC LIMIT 1;";

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
                    process.setIaqco2(rs.getFloat("iaq_co2"));
                    process.setEco2(rs.getFloat("eco2"));
                    process.setData(rs.getTimestamp("data"));
                    process.setDb(rs.getFloat("db"));
                    process.setLux(rs.getFloat("lux"));
                    process.setTemperatura(rs.getFloat("temperatura"));
                    process.setUmidade(rs.getFloat("umidade"));
                    process.setTvoc(rs.getFloat("tvoc"));
                    process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));
                    process.setLocalizacao(rs.getString("sala") + ", " + rs.getString("predio") + ", " + rs.getString("local"));

                    try {
                        process.getData().setHours(process.getData().getHours() - 3);
                    } catch (NullPointerException E) {
                        E.printStackTrace();
                    }

                    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
                    String strDate = formatter.format(process.getData());
                    process.setDataInString(strDate);

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
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro1;
    }

    // <===========Método que retorna todos os dados do último registro de cada Airpure ligado ao seu projeto.=========================================================================================================================>
    public ArrayList<amostragens> returnLastSampleFromSession() {
        try {
            registro1 = new ArrayList<amostragens>();
            FacesContext fContext = FacesContext.getCurrentInstance();
            ExternalContext extContext = fContext.getExternalContext();
            HttpServletRequest request = (HttpServletRequest) fContext.getExternalContext().getRequest();
            String parametro = request.getParameter("smp_id");
            Main.db = null;
            BD.ConectarBD();
            //String sql = "SELECT DISTINCT ON (id_dispositivos) id_dispositivos,* FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado +") ORDER BY id_dispositivos,id DESC;";
            String sql = "SELECT *, (SELECT avg(iaq_co2) as iaq_co2_3 FROM amostragens WHERE id_dispositivos = " + parametro + " AND NOW() > data::timestamptz AND NOW() - data::timestamptz <= interval '3 hours' ),(SELECT avg(iaq_co2) as iaq_co2_5 FROM amostragens WHERE id_dispositivos = " + parametro + " AND NOW() > data::timestamptz AND NOW() - data::timestamptz <= interval '5 hours' )  FROM amostragens WHERE id_dispositivos = " + parametro + " ORDER BY id DESC LIMIT 1;";

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
                    dispositivos device = new dispositivos();
                    process.setId(rs.getLong("id"));
                    process.setCo2(rs.getFloat("co2"));
                    process.setIaqco2(rs.getFloat("iaq_co2"));
                    process.setIaqco2Total(" Atual: " + rs.getFloat("iaq_co2") + " | Últimas 3 horas: " + rs.getFloat("iaq_co2_3") + " | Últimas 5 horas: " + rs.getFloat("iaq_co2_5"));
                    process.setEco2(rs.getFloat("eco2"));
                    process.setData(rs.getTimestamp("data"));
                    process.setDb(rs.getFloat("db"));
                    process.setLux(rs.getFloat("lux"));
                    device.setId(rs.getInt("id_dispositivos"));
                    process.setAirpure(device);
                    process.setTemperatura(rs.getFloat("temperatura"));
                    process.setUmidade(rs.getFloat("umidade"));
                    process.setTvoc(rs.getFloat("tvoc"));
                    process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));

                    try {
                        process.getData().setHours(process.getData().getHours() - 3);
                    } catch (NullPointerException E) {
                        E.printStackTrace();
                    }

                    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
                    String strDate = formatter.format(process.getData());
                    process.setDataInString(strDate);

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
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro1;
    }

    // <===========Método que retorna todos os dados dos registros.=========================================================================================================================>
    public ArrayList<amostragens> returnAllLastSampleFromSession() {
        try {

            registro1 = new ArrayList<amostragens>();
            try {
                FacesContext facesContext = FacesContext.getCurrentInstance();
                HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
                int parametro = (int) session.getAttribute("smp_id");
                String startpoint = (String) session.getAttribute("startPoint");
                String endpoint = (String) session.getAttribute("endPoint");

                Main.db = null;
                BD.ConectarBD();
                //String sql = "SELECT DISTINCT ON (id_dispositivos) id_dispositivos,* FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado +") ORDER BY id_dispositivos,id DESC;";
                String sql = "SELECT * FROM amostragens WHERE id_dispositivos = " + parametro + " AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "' ORDER BY id ASC;";

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
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro1;
    }

    // <===========Método que retorna todos os dados do último registro do ID passado como parametro.=========================================================================================================================>
    public ArrayList<amostragens> returnLastSampleFromId(int id) {
        try {
            registro4 = new ArrayList<amostragens>();
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT * FROM amostragens WHERE id_dispositivos = " + id + " ORDER BY id DESC LIMIT 1;";

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
                    registro4.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro4;
    }

    // <===========Método que retorna todos os dados do último registro de cada Airpure de uma determinada sala.=========================================================================================================================>
    public ArrayList<amostragens> returnSampleFromRoom(int room) {
        try {
            registro3 = new ArrayList<amostragens>();
            dispositivos dispositivo = new dispositivos();
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT * FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_ambientes = " + room + ") ORDER BY id DESC LIMIT 1;";

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
                    process.setIaqco2(rs.getFloat("iaq_co2"));
                    process.setV_FIRMWARE(rs.getInt("V_FIRMWARE"));
                    dispositivo.setId(rs.getInt("id_dispositivos"));
                    process.setAirpure(dispositivo);
                    try {
                        process.getData().setHours(process.getData().getHours() - 3);
                    } catch (NullPointerException E) {
                        E.printStackTrace();
                    }

                    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
                    String strDate = formatter.format(process.getData());
                    process.setDataInString(strDate);

                    registro3.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro3;
    }

    // <============================================================================================================================================================================>
    //Faz o map de valores.
    int mapColors(int x, int in_min, int in_max, int out_min, int out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    // <===========Método que retorna a cor do quadrado do parametro.=========================================================================================================================>
    public String returnColorParam(Float value, String param) {
        try {
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
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";

    }

    // <===========Método que retorna a localizacao do airpure.=========================================================================================================================>
    public String returnLocation(int id) {
        try {
            String location = "";
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT localizacao from dispositivos WHERE id = " + id + ";";

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
                    location = rs.getString("localizacao");
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }

            return location;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";

    }

    public String returnAvgIAQCO2() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idAmbiente = (int) session.getAttribute("relatorio");
            String startpoint = (String) session.getAttribute("startPoint");
            String endpoint = (String) session.getAttribute("endPoint");

            float media = 0;
            Main.db = null;
            BD.ConectarBD();
            String sql = "select avg(iaq_co2) as co2 from amostragens where id_dispositivos IN ( select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";

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
                    media = rs.getFloat("co2");
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
            String response = "";
            if (media < 50) {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM BOA QUALIDADE DO AR INTERNO";
            } else if (media < 100) {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM QUALIDADE DO AR INTERNO REGULAR";

            } else if (media < 200) {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM QUALIDADE DO AR INTERNO INADEQUADA";
            } else if (media < 300) {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM MÁ QUALIDADE DO AR INTERNO";

            } else if (media < 400) {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM QUALIDADE DO AR INTERNO PÉSSIMA";

            } else {
                response = "Média IAQ Ambiente (CO2): " + media + " | AMBIENTE COM QUALIDADE DO AR INTERNO CRÍTICA";
            }

            return response;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";

    }

    // <===========Método que retorna todas as salas.=========================================================================================================================>
    public ArrayList<ambientes> returnAmbientes() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
            String tipoOrdenacao = (String) session.getAttribute("tipoOrdenacao");
            registro2 = new ArrayList<ambientes>();
            Main.db = null;
            String sql = "";
            BD.ConectarBD();
            if (tipoOrdenacao == "1") {
                sql = "SELECT *, (SELECT modelo from hvac WHERE id = id_hvac limit 1), (SELECT potencia from hvac WHERE id = id_hvac limit 1) FROM ambientes WHERE id IN (SELECT id_ambientes FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY sala DESC;";
            } else {
                sql = "SELECT *, (SELECT modelo from hvac WHERE id = id_hvac limit 1), (SELECT temperatura from amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_ambientes = ambientes.id) ORDER BY amostragens.id DESC limit 1), (SELECT potencia from hvac WHERE id = id_hvac limit 1) FROM ambientes WHERE id IN (SELECT id_ambientes FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY temperatura ASC;";
            }
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
                    ambientes process = new ambientes();
                    process.setId(rs.getInt("id"));
                    process.setLocal(rs.getString("local"));
                    process.setPredio(rs.getString("predio"));
                    process.setSala(rs.getString("sala"));
                    process.setEquipamentos(rs.getString("modelo") + " | " + rs.getString("potencia") + "btus");
                    process.setCapacidadeMaxima(rs.getString("capmaxima"));
                    process.setDimensao(rs.getString("dimensao"));

                    registro2.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro2;
    }

    // <===========Método que retorna estatisticas de todos os parametros.=========================================================================================================================>
    public ArrayList<estatistica> returnStatistics() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idAmbiente = (int) session.getAttribute("relatorio");
            String startpoint = (String) session.getAttribute("startPoint");
            String endpoint = (String) session.getAttribute("endPoint");
            registro6 = new ArrayList<estatistica>();

            Main.db = null;
            BD.ConectarBD();
            String sqlCO2 = "SELECT min(co2) as minCO2, max(co2) as maxCO2, stddev(co2) as desvPadco2 , (SELECT ((select sum(co2) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediaCO2) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqleCO2 = "SELECT min(eco2) as mineCO2, max(eco2) as maxeCO2, stddev(eco2) as desvPadeco2 , (SELECT ((select sum(eco2) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediaeCO2) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqlTVOC = "SELECT min(tvoc) as minTVOC, max(tvoc) as maxTVOC, stddev(tvoc) as desvPadtvoc , (SELECT ((select sum(tvoc) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediaTVOC) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqlUmidade = "SELECT min(umidade) as minUmidade, max(umidade) as maxUmidade, stddev(umidade) as desvPadUmidade , (SELECT ((select sum(umidade) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediaUmidade) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqlTemperatura = "SELECT min(temperatura) as minTemperatura, max(temperatura) as maxTemperatura, stddev(temperatura) as desvPadTemp ,(SELECT ((select sum(temperatura) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediaTemperatura) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqldb = "SELECT min(db) as mindb, max(db) as maxdb, stddev(db) as desvPadDB ,(SELECT ((select sum(db) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as mediadb) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";
            String sqllux = "SELECT min(lux) as minlux, max(lux) as maxlux, stddev(lux) as desvPadLux , (SELECT ((select sum(lux) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + "  AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) / (select count(*) from amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + " ) AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "')) as medialux) FROM amostragens where id_dispositivos IN (select id from dispositivos where id_ambientes = " + idAmbiente + ") AND data BETWEEN '" + startpoint + "' AND '" + endpoint + "';";

            try {
                Main.sql = Main.db.createStatement();
            } catch (SQLException e) {
                e.printStackTrace();

            }

            ResultSet rs = null;
            try {

                rs = Main.sql.executeQuery(sqlCO2);
                System.out.println(sqlCO2);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("CO2 (ppm)");
                    process.setCo2Max(rs.getFloat("maxCO2"));
                    process.setCo2Min(rs.getFloat("minCO2"));
                    process.setCo2Media(rs.getFloat("mediaCO2"));
                    process.setCo2DesvPad(rs.getFloat("desvPadco2"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqlTVOC);
                System.out.println(sqlTVOC);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("TVOC (ppb)");
                    process.setCo2Max(rs.getFloat("maxTVOC"));
                    process.setCo2Min(rs.getFloat("minTVOC"));
                    process.setCo2Media(rs.getFloat("mediaTVOC"));
                    process.setCo2DesvPad(rs.getFloat("desvPadtvoc"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqlUmidade);
                System.out.println(sqlUmidade);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("Umidade (%)");
                    process.setCo2Max(rs.getFloat("maxUmidade"));
                    process.setCo2Min(rs.getFloat("minUmidade"));
                    process.setCo2Media(rs.getFloat("mediaUmidade"));
                    process.setCo2DesvPad(rs.getFloat("desvPadUmidade"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqlTemperatura);
                System.out.println(sqlTemperatura);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("Temperatura (ºC)");
                    process.setCo2Max(rs.getFloat("maxTemperatura"));
                    process.setCo2Min(rs.getFloat("minTemperatura"));
                    process.setCo2Media(rs.getFloat("mediaTemperatura"));
                    process.setCo2DesvPad(rs.getFloat("desvPadTemp"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqleCO2);
                System.out.println(sqleCO2);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("eCO2 (ppm)");
                    process.setCo2Max(rs.getFloat("maxeCO2"));
                    process.setCo2Min(rs.getFloat("mineCO2"));
                    process.setCo2Media(rs.getFloat("mediaeCO2"));
                    process.setCo2DesvPad(rs.getFloat("desvPadeco2"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqldb);
                System.out.println(sqldb);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("Ruído (dB)");
                    process.setCo2Max(rs.getFloat("maxdb"));
                    process.setCo2Min(rs.getFloat("mindb"));
                    process.setCo2Media(rs.getFloat("mediadb"));
                    process.setCo2DesvPad(rs.getFloat("desvPadDB"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {

                rs = Main.sql.executeQuery(sqllux);
                System.out.println(sqllux);
                while (rs.next()) {
                    estatistica process = new estatistica();
                    process.setParametro("Luminosidade (Lux)");
                    process.setCo2Max(rs.getFloat("maxlux"));
                    process.setCo2Min(rs.getFloat("minlux"));
                    process.setCo2Media(rs.getFloat("medialux"));
                    process.setCo2DesvPad(rs.getFloat("desvPadLux"));
                    registro6.add(process);

                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro6;
    }

    // <===========Método que retorna a sala que foi selecionada para o relatório.=========================================================================================================================>
    public ArrayList<ambientes> returnAmbienteById() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idAmbiente = (int) session.getAttribute("relatorio");
            registro2 = new ArrayList<ambientes>();
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT *, (SELECT modelo from hvac WHERE id = id_hvac limit 1),(SELECT n_controle from hvac WHERE id = id_hvac limit 1),(SELECT n_patrimonio from hvac WHERE id = id_hvac limit 1), (SELECT potencia from hvac WHERE id = id_hvac limit 1) FROM ambientes WHERE id = " + idAmbiente + " ORDER BY id DESC;";

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
                    ambientes process = new ambientes();
                    process.setId(rs.getInt("id"));
                    process.setLocal(rs.getString("local"));
                    process.setPredio(rs.getString("predio"));
                    process.setCapacidadeMaxima(rs.getString("capmaxima"));
                    process.setDimensao(rs.getString("dimensao"));
                    process.setSala(rs.getString("sala"));
                    process.setN_Controle(rs.getString("n_controle"));
                    process.setN_Patrimonio(rs.getString("n_patrimonio"));
                    process.setEquipamentos(rs.getString("modelo") + " | " + rs.getString("potencia") + "btus");

                    registro2.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro2;
    }

    // <===========Método que retorna todos os dispositivos.=========================================================================================================================>
    public ArrayList<dispositivos> retornaDispositivo() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
            registro5 = new ArrayList<dispositivos>();
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + " ORDER BY id DESC;";

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
                    registro5.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro5;
    }

    // <===========Método que retorna todas as manutencoes.=========================================================================================================================>
    public ArrayList<manutencao> retornaManutencoes() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idAmbiente = (int) session.getAttribute("relatorio");
            registro7 = new ArrayList<manutencao>();
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT *, (select modelo FROM hvac where id = id_hvac) FROM manutencao WHERE id_hvac IN ( select id_hvac from ambientes WHERE id = " + idAmbiente + ") ORDER BY id DESC;";

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
                    manutencao process = new manutencao();
                    process.setData_execucaots(rs.getTimestamp("data_execucao"));
                    process.setExecutor(rs.getString("executor"));
                    process.setServicos(rs.getString("servicos"));
                    process.setTipo(rs.getString("tipo"));
                    process.setProxima_execucao(rs.getString("modelo"));
                    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
                    String strDate = formatter.format(process.getData_execucaots());
                    process.setData_execucao(strDate);

                    registro7.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return registro7;
    }

    public ArrayList<manutencao> retornaProximasManutencoes() {
        try {

            registro7 = new ArrayList<manutencao>();
            Main.db = null;
            BD.ConectarBD();
            String sql = "select * from manutencao INNER JOIN hvac ON hvac.id = manutencao.id_hvac INNER JOIN ambientes ON ambientes.id_hvac = hvac.id WHERE proxima_execucao > CURRENT_DATE;";

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
                    manutencao process = new manutencao();
                    process.setData_execucaots(rs.getTimestamp("proxima_execucao"));
                    process.setExecutor(rs.getString("executor"));
                    process.setData_execucao(rs.getString("modelo") + " | " + rs.getString("potencia") + " btus | " + rs.getString("tipo") + " | Patrimônio " + rs.getString("n_patrimonio"));
                    process.setSala("Sala " + rs.getString("sala") + ", no " + rs.getString("predio") + " da " + rs.getString("local"));

                    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
                    String strDate = formatter.format(process.getData_execucaots());
                    process.setProxima_execucao(strDate);

                    registro7.add(process);
                }

            } catch (SQLException e) {
                e.printStackTrace();

            }
            try {
                Main.db.close();
            } catch (SQLException ex) {
                Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

            }

            return registro7;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return registro7;
    }

    // <===========Método que retorna o icone do quadrado do parametro.=========================================================================================================================>
    public String returnImageParam(Float value, String param) {
        try {
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
                return "Bom";
            } else if (value < minimo) {
                return "Inadequado";
            } else {
                return "Ruim";
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";
    }

    // <===========Método de inserção modelo ao banco de dados.=========================================================================================================================>
    public void insertDatabase() {
        try {
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
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }

    // <===========Retorna a data do utlimo registro do projeto. =========================================================================================================================>
    public String ultimoRegistroData() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
            String data = "", hora = "", id = "";
            Timestamp dataAux;
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT id_dispositivos,data FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY id DESC LIMIT 1;";

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
                    id = rs.getString("id_dispositivos");
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

            return "Último registro: " + data + " " + hora + " | ID Dispositivo: " + id;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";
    }

    // <===========Retorna a data para o nome do csv. =========================================================================================================================>
    public String returnNameOfCSV() {
        SimpleDateFormat sdf1 = new SimpleDateFormat("dd/MM/yyyy"); //você pode usar outras máscaras
        Date y = new Date();
        return y.toString();
    }

    // <===========Retorna se o aparelho esta ligado ou nao. =========================================================================================================================>
    public String getDaysBetween(Date data) {
        Date y = new Date();
        System.out.println("DIFERENÇA " + (y.getTime() - data.getTime()));
        if ((Math.abs(y.getTime() - data.getTime())) < 14600000) {
            return "Ok";
        } else {
            return "Desligado";
        }

    }

// <===========Atribui algum parametro a sessao do usuario (URL) =========================================================================================================================>
    public String putItOnSession(int id) throws InterruptedException {

        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            FacesContext.getCurrentInstance().getExternalContext().redirect("detalhar?smp_id=" + id);
            session.setAttribute("smp_id", id);

            return "505.xhtml";
        } catch (IOException ex) {
            Logger.getLogger(RequestData3.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "";
    }

    public String putItOnSession2(int id, int id2) throws InterruptedException {

        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.setAttribute("smp_id", id);
            session.setAttribute("relatorio", id2);
            FacesContext.getCurrentInstance().getExternalContext().redirect("detalhar?smp_id=" + id);

            return "505.xhtml";
        } catch (IOException ex) {
            Logger.getLogger(RequestData3.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "";
    }

    // <===========Atribui algum parametro a sessao do usuario (URL) =========================================================================================================================>
    public String putItOnSessionRoom(int id) throws InterruptedException {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            FacesContext.getCurrentInstance().getExternalContext().redirect("relatorio?ambiente=" + id);
            session.setAttribute("relatorio", id);

        } catch (Exception ex) {
            System.out.println("Error...");
        }
        return "505.xhtml";
    }
    // <===========Remove o filtro de data do projeto. =========================================================================================================================>

    public String noFilterDatatable() throws InterruptedException {
        try {
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
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";

    }

    public String noFilterDatatableIsabela() throws InterruptedException {
        try {
            Date data = new Date(System.currentTimeMillis());
            Date data2 = new Date(System.currentTimeMillis());
            data.setDate(data.getDate() + 1);
            data2.setDate(data2.getDate());
            SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
            try {
                FacesContext facesContext = FacesContext.getCurrentInstance();
                HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
                session.setAttribute("endPoint", formatarDate.format(data));
                session.setAttribute("startPoint", formatarDate.format(data2));
            } catch (Exception ex) {
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";

    }
    // <===========Retorna o período de análise do filtro.=========================================================================================================================>

    public String time() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            String startpoint = (String) session.getAttribute("startPoint");
            String endpoint = (String) session.getAttribute("endPoint");
            String inicioAux = "";
            String fimAux = "";
            String aux[];

            aux = startpoint.split(Pattern.quote("/"));
            inicioAux = aux[2] + "/" + aux[1] + "/" + aux[0];

            aux = endpoint.split(Pattern.quote("/"));
            fimAux = aux[2] + "/" + aux[1] + "/" + (aux[0]);

            return "(" + inicioAux + " - " + fimAux + ")";

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return "";
    }
    // <===========Altera o periodo do filtro inserido pelo usuario =========================================================================================================================>

    public String datatableFilterData() {

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

            return "505.xhtml";
        } catch (IOException ex) {
            Logger.getLogger(RequestData3.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "";
    }

// <============================================================================================================================================================================>
}

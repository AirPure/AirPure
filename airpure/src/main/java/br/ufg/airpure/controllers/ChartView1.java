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

//<------------------------------------------------------------Getter's and setter's--------------------------------------------------------------------------->
    public List<chartRecord> getRegistro1() {
        return registro1;
    }

    public List<chartRecord> getRegistro2() {
        return registro2;
    }

    public List<chartRecord> getRegistro3() {
        return registro3;
    }

    public List<chartRecord> getRegistro4() {
        return registro4;
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
            Main.db = null;
            BD.ConectarBD();
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
            Main.db = null;
            BD.ConectarBD();
            String sql = "SELECT * FROM amostragens WHERE id_dispositivos IN (SELECT id FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + ") ORDER BY id ASC;";

            try {
                Main.sql = Main.db.createStatement();
            } catch (SQLException e) {
            }
            ResultSet rs;
            try {
                rs = Main.sql.executeQuery(sql);
                System.out.println(sql);

                while (rs.next()) {
                    x_value = (rs.getString("id"));
                    y_value = (rs.getDouble("co2"));
                    registro1.add(new chartRecord((x_value), y_value));
                }

                rs.close();
            } catch (SQLException e) {
            }
        }

    }

//<-------------------------------------------------------------------------------------------------------------------------------------> 
}

package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.*;
import javax.faces.bean.ManagedBean;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

@ManagedBean(name = "autenticacao")
public class autenticacao implements HttpSessionListener {

    // <==============Getters and Setters====================================================================================================================================>
    private Users usuario = new Users();
    private dispositivos airpure = new dispositivos();
    private manutencao work = new manutencao();
    private rangeParametros range = new rangeParametros();

    public rangeParametros getRange() {
        return range;
    }

    public void setRange(rangeParametros range) {
        this.range = range;
    }

    public manutencao getWork() {
        return work;
    }

    public void setWork(manutencao work) {
        this.work = work;
    }

    public dispositivos getAirpure() {
        return airpure;
    }

    public void setAirpure(dispositivos airpure) {
        this.airpure = airpure;
    }

    public Users getUsuario() {
        return usuario;
    }

    public void setUsuario(Users usuario) {
        this.usuario = usuario;
    }

    public autenticacao() {
    }

    // <==========================Função de verificação para retornar se quem está acessando a página está logado ou não.==============================================================================================================================>
    public void verificacao() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        if (((session.getAttribute("login").equals("usuario"))) == false) {
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/autenticacao");
            } catch (IOException ex) {
                Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    // <==========================Função de direciona para o sistema 1.==============================================================================================================================>

    public void selecionaSistema1() throws IOException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("login", "usuario");
        session.setAttribute("usuario", 1);
        session.setAttribute("projetoEnvolvido", 1);
        session.setAttribute("filtroAirPure", "AirPure 3");
        Date data = new Date(System.currentTimeMillis());
        Date data2 = new Date(System.currentTimeMillis());
        data.setDate(data.getDate() + 1);
        data2.setDate(data2.getDate());
        SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
        try {
            session.setAttribute("endPoint", formatarDate.format(data));
            session.setAttribute("startPoint", formatarDate.format(data2));
        } catch (Exception ex) {
        }
        FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/saso");
    }
    // <==========================Função de direciona para o sistema 2.==============================================================================================================================>

    public void selecionaSistema2() throws IOException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("login", "usuario");
        session.setAttribute("usuario", 2);
        session.setAttribute("projetoEnvolvido", 2);
        Date data = new Date(System.currentTimeMillis());
        Date data2 = new Date(System.currentTimeMillis());
        data.setDate(data.getDate() + 2);
        data2.setDate(data2.getDate() - 2);
        SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
        try {
            session.setAttribute("endPoint", formatarDate.format(data));
            session.setAttribute("startPoint", formatarDate.format(data2));
        } catch (Exception ex) {
        }
        FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/sipai");
    }
    // <==========================Função de direciona para o sistema 3.==============================================================================================================================>

    public void selecionaSistema3() throws IOException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("login", "usuario");
        session.setAttribute("usuario", 3);
        session.setAttribute("projetoEnvolvido", 3);
        Date data = new Date(System.currentTimeMillis());
        Date data2 = new Date(System.currentTimeMillis());
        data.setDate(data.getDate() + 2);
        data2.setDate(data2.getDate() - 2);
        SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
        try {
            session.setAttribute("endPoint", formatarDate.format(data));
            session.setAttribute("startPoint", formatarDate.format(data2));
        } catch (Exception ex) {
        }
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Oooops...", "Algo deu errado.."));
        FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/simpec");
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Oooops...", "Algo deu errado.."));
    }
    // <===========Método de inserção modelo ao banco de dados.=========================================================================================================================>

    public void insertAirpure() throws IOException {
        Main.db = null;
        BD.ConectarBD();
        String array[] = new String[3];
        array = airpure.getAmbiente1().split(",");
        String sql = "INSERT INTO dispositivos (nome,id_projeto,id_ambientes) VALUES ('" + airpure.getNome() + "'," + airpure.getId_projeto() + "," + array[0] + ");";
        System.out.println(sql);
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
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/home");

    }

    public void atualizaPreferencias() throws IOException {
        Main.db = null;
        BD.ConectarBD();
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        

        String sql = "UPDATE usuario SET iaq=" + range.isIaq() + ", tvoc=" + range.isTvoc() + ",co2=" + range.isCo2()+ ", eco2=" + range.isEco2() + ",luminosidade=" + range.isLuminosidade()+ ",ruido=" + range.isLuminosidade() + ", umidade=" + range.isUmidade() + ", temperatura = " + range.isTemperatura() + " WHERE id = " + session.getAttribute("usuario") + ";";
        System.out.println(sql);
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
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Preferencias atualizadas com sucesso!"));

    }

    public void insertManutencao() throws IOException {
        Main.db = null;
        BD.ConectarBD();
        String array[] = new String[3];
        array = work.getId_hvac().split(",");
        String sql = "INSERT INTO manutencao (data_execucao,proxima_execucao,servicos,executor,id_hvac,tipo) VALUES ('" + work.getData_execucao() + "','" + work.getProxima_execucao() + "','" + work.getServicos() + "','" + work.getExecutor() + "'," + array[0] + ",'" + work.getTipo() + "');";
        System.out.println(sql);
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

    public void insertHVAC() throws IOException {
        Main.db = null;
        BD.ConectarBD();
        String array[] = new String[3];
        //array = work.getId_hvac().split(",");
        String sql = "INSERT INTO hvac (modelo,potencia,n_controle,n_patrimonio) VALUES ('" + work.getServicos() + "','" + work.getProxima_execucao() + "','" + work.getExecutor() + "','" + work.getId_hvac() + "');";
        System.out.println(sql);
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

    public void insertAmbientes() throws IOException {
        Main.db = null;
        BD.ConectarBD();
        String array[] = new String[3];
        array = work.getSala().split(",");
        String sql = "INSERT INTO ambientes (sala,predio,local,dimensao,capmaxima,id_hvac) VALUES ('" + work.getProxima_execucao() + "','" + work.getServicos() + "','" + work.getExecutor() + "','" + work.getId_hvac() + "','" + work.getData_execucao() + "'," + array[0] + ");";
        System.out.println(sql);
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

    // <==========================Função que efetua o login ao usuário. Além de verificar se a conta e senha existem e estão corretos, salva algumas informações em variáveis de sessão.==============================================================================================================================>
    public void doEfetuarLogin() throws IOException {
        Users usuario2 = new Users();
        projetos projeto = new projetos();
        Date data = new Date(System.currentTimeMillis());
        Date data2 = new Date(System.currentTimeMillis());
        data.setDate(data.getDate() + 2);
        data2.setDate(data2.getDate() - 2);
        SimpleDateFormat formatarDate = new SimpleDateFormat("yyyy/MM/dd");
        int idCustomer = 0;
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM usuario WHERE usuario LIKE '" + usuario.getLogin() + "' AND senha LIKE '" + HashUtils.getHashMd5(usuario.getHash()) + "'";
        System.out.println(sql);
        try {
            Main.sql = Main.db.createStatement();
        } catch (SQLException e) {
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Oooops...", "Algo deu errado.."));
        }
        ResultSet rs = null;
        try {
            rs = Main.sql.executeQuery(sql);
            System.out.println(sql);
            while (rs.next()) {
                usuario2.setId(rs.getInt("id"));
                usuario2.setEmail(rs.getString("email"));
                usuario2.setLogin(rs.getString("usuario"));
                usuario2.setHash(rs.getString("senha"));
                usuario2.setNome(rs.getString("nome"));
                projeto.setId(rs.getInt("id_projeto"));
                usuario2.setProjeto(projeto);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Oooops...", "Algo deu errado.."));
        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class
                    .getName()).log(Level.SEVERE, null, ex);
        }
        try {

            if (usuario.getLogin().equals(usuario2.getLogin())
                    && usuario2.getHash().equals(HashUtils.getHashMd5(usuario.getHash()))) {
                System.out.println("Usuario aceito!");
                FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Bem vindo!", "Usuario."));
                FacesContext facesContext = FacesContext.getCurrentInstance();
                HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
                session.setAttribute("login", "usuario");
                session.setAttribute("usuario", usuario2.getId());
                session.setAttribute("projetoEnvolvido", usuario2.getProjeto().getId());
                session.setAttribute("endPoint", formatarDate.format(data));
                session.setAttribute("startPoint", formatarDate.format(data2));
                session.setAttribute("airpure", "SELECT id FROM dispositivos WHERE id_projeto = " + usuario2.getProjeto().getId());
            } else {
                System.out.println("Usuario rejeitado!");
                FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Usuário e/ou senha incorreto.", "Usuário e/ou senha incorreto."));
            }

        } catch (NullPointerException e) {
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Usuario e/ou senha incorreta!", "Algo deu errado."));
        }
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        if (session.getAttribute("login").equals("usuario") && usuario2.getProjeto().getId() == 1) {
            try {

                session.setAttribute("filtroAirPure", "AirPure 3");;
                data = new Date(System.currentTimeMillis());
                data2 = new Date(System.currentTimeMillis());
                data.setDate(data.getDate() + 1);
                data2.setDate(data2.getDate());
                formatarDate = new SimpleDateFormat("yyyy/MM/dd");
                try {
                    session.setAttribute("endPoint", formatarDate.format(data));
                    session.setAttribute("startPoint", formatarDate.format(data2));
                } catch (Exception ex) {
                }

                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/saso");
            } catch (IOException ex) {
                Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else if (session.getAttribute("login").equals("usuario") && usuario2.getProjeto().getId() == 3) {
            try {
                session.setAttribute("tipoOrdenacao", "1");
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/simpec");
            } catch (IOException ex) {
                Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
            }
        } else if (session.getAttribute("login").equals("usuario") && usuario2.getProjeto().getId() == 2) {
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/sipai");
            } catch (IOException ex) {
                Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    public ArrayList<String> returnDispositivos() {

        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        ArrayList<String> dispositivoAirpure = new ArrayList<String>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + " ORDER BY id DESC;";

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
                dispositivoAirpure.add(rs.getString("nome"));
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }
        return dispositivoAirpure;
    }

    public String returnLocalizacao() {

        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        String idProjetoRelacionado = (String) session.getAttribute("filtroAirPure");
        String dispositivoLocalizacao = "", local = "", predio = "", sala = "";
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM ambientes WHERE id IN ( select id_ambientes from dispositivos where nome ILIKE '" + idProjetoRelacionado + "') ORDER BY id DESC;";

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
                predio = rs.getString("predio");
                sala = rs.getString("sala");
                local = rs.getString("local");
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }
        return "O dispositivo " + idProjetoRelacionado + " encontra-se no(a) prédio " + predio + ", sala " + sala + ", local " + local + ".";
    }

    public ArrayList<String> returnHVAC() {

        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        ArrayList<String> dispositivoHVAC = new ArrayList<String>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM hvac WHERE id IN(SELECT id_hvac FROM ambientes WHERE id IN (select id_ambientes FROM dispositivos WHERE id_projeto = " + idProjetoRelacionado + "))  ORDER BY id DESC;";

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
                dispositivoHVAC.add(rs.getString("id") + "," + rs.getString("modelo") + "," + rs.getString("potencia") + "btus" + "," + rs.getString("n_patrimonio"));
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }
        return dispositivoHVAC;
    }

    public ArrayList<String> returnAmbientes() {

        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        int idProjetoRelacionado = (int) session.getAttribute("projetoEnvolvido");
        ArrayList<String> ambientes = new ArrayList<String>();
        Main.db = null;
        BD.ConectarBD();
        String sql = "SELECT * FROM ambientes WHERE id IN(SELECT id_ambientes FROM dispositivos WHERE id_projeto IN (select id FROM projeto WHERE id = " + idProjetoRelacionado + "))  ORDER BY id DESC;";

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
                ambientes.add(rs.getString("id") + "," + rs.getString("sala") + " - " + rs.getString("predio") + " - " + rs.getString("local"));
            }

        } catch (SQLException e) {
            e.printStackTrace();

        }
        try {
            Main.db.close();
        } catch (SQLException ex) {
            Logger.getLogger(RequestData1.class.getName()).log(Level.SEVERE, null, ex);

        }
        return ambientes;
    }

    public void printText() throws IOException {
        System.out.println("Valor do select: " + usuario.getNome());
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("filtroAirPure", usuario.getNome());
        FacesContext.getCurrentInstance().getExternalContext().redirect("saso");

    }
    
    public void atualizarDispositivos() throws IOException {
        System.out.println("Valor do select: " + usuario.getNome());
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("filtroAirPure", usuario.getNome());
        FacesContext.getCurrentInstance().getExternalContext().redirect("consulta");

    }

    public void defineOrdenacao() throws IOException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("tipoOrdenacao", usuario.getNome());
        FacesContext.getCurrentInstance().getExternalContext().redirect("simpec");

    }

    public void defineOrdenacaoProjeto() throws IOException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("ordenacaoProjeto", usuario.getNome());
        FacesContext.getCurrentInstance().getExternalContext().redirect("sipai");

    }

    public void salvaFiltro() throws IOException {
        System.out.println("Valor do select: " + usuario.getNome());
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        session.setAttribute("filtroAirPure", usuario.getNome());

    }

    // <==========================Não implementado.==============================================================================================================================>
    public void logOut() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.invalidate();
            FacesContext.getCurrentInstance().getExternalContext().redirect("autenticacao");
        } catch (IOException ex) {
            Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
    // <========================== Não implementado.==============================================================================================================================>

    @Override
    public void sessionCreated(HttpSessionEvent se) {
        throw new UnsupportedOperationException("Ainda não suportado.");
    }
    // <========================== Não implementado.==============================================================================================================================>

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        throw new UnsupportedOperationException("Ainda não suportado.");
    }

}

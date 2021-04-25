package br.ufg.airpure.controllers;

import br.ufg.airpure.entity.*;
import javax.faces.bean.ManagedBean;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
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
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/home");
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
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/autenticacao");
            }

        } catch (NullPointerException e) {
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR, "Usuario e/ou senha incorreta!", "Algo deu errado."));
        }
        FacesContext facesContext = FacesContext.getCurrentInstance();
        HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
        if (session.getAttribute("login").equals("usuario")) {
            try {
                FacesContext.getCurrentInstance().getExternalContext().redirect("/airpure/sistema/saso");
            } catch (IOException ex) {
                Logger.getLogger(autenticacao.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    // <==========================Não implementado.==============================================================================================================================>

    public void logOut() {
        try {
            FacesContext facesContext = FacesContext.getCurrentInstance();
            HttpSession session = (HttpSession) facesContext.getExternalContext().getSession(true);
            session.invalidate();
            FacesContext.getCurrentInstance().getExternalContext().redirect("home");
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

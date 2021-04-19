package br.ufg.airpure.controllers;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/*
    Método responsável por aplicar os filtros de sessão.
 */
public class FiltroSessao {

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //Verifica se a sessão não expirou, se sim volta para a página de login
        HttpSession session = ((HttpServletRequest) request).getSession(false);
        if (session != null && !session.isNew()) {
            chain.doFilter(request, response);
        } else {
            //Retorna para a página de login
            ((HttpServletResponse) response).sendRedirect(((HttpServletRequest) request).getContextPath() + "/sistema/autenticacao.xhtml");
        }
    }

}

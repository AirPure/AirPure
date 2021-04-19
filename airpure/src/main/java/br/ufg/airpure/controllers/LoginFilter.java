/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.ufg.airpure.controllers;

import java.io.IOException;
 
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
 
public class LoginFilter implements Filter {
 
 public void destroy() {
 
 }
 
 public void doFilter(ServletRequest request, ServletResponse response,
                    FilterChain chain) throws IOException, ServletException {
   autenticacao user = null;
   HttpSession sess = ((HttpServletRequest) request).getSession(false);
    
   if (sess != null){
         user = (autenticacao) sess.getAttribute("usuarioLogado");
   }      
 
     if (user == null) {
              String contextPath = ((HttpServletRequest) request)
                                 .getContextPath();
              ((HttpServletResponse) response).sendRedirect(contextPath
                                 + "/security/form_login.xhtml");
     } else {
              chain.doFilter(request, response);
     }
 
 }
 
 public void init(FilterConfig arg0) throws ServletException {
           // TODO Auto-generated method stub
 
 }
 
}
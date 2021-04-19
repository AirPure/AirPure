package br.ufg.airpure.controllers;
import java.sql.*;

/*
Arquivo contendo o método responsável pela conexão ao banco de dados.
*/

public class BD {

    public static boolean ConectarBD() {
        //Método responsável pela conexão direta com o banco de dados.
        try {
            Class.forName("org.postgresql.Driver");
            String sConnectionString = "jdbc:postgresql://server01.matsoftwares.com.br:5432/airpure";
            Main.db = DriverManager.getConnection(sConnectionString, Main.username, Main.password);
            Main.dbmd = Main.db.getMetaData();
            Main.sql = Main.db.createStatement();
            return true;
        } catch (ClassNotFoundException ex) {
            return false;
        } catch (SQLException ex) {
            return false;
        }

    }
}

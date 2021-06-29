package br.ufg.airpure.controllers;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.xml.rpc.holders.StringHolder;
@RequestScoped
@ManagedBean
public class Main extends Thread {

    public static Connection db;        
    public static Statement sql;      
    public static DatabaseMetaData dbmd;    

    static String SVNRevision = " V.244 ";
    static String username = "postgres";
    static String password = "10052019";
    static String database1 = "";
    static Integer TempoCiclo = 10;
    static StringHolder db1 = new StringHolder();

    public String getSVNRevision() {
        Date data = new Date(System.currentTimeMillis()); 
        SimpleDateFormat formatarDate = new SimpleDateFormat("dd/MM/yyyy"); 
        return SVNRevision + " | " + formatarDate.format(data);
    }


    public static void main(String args[]) {
        Connection db;   
        Statement sql;     
        DatabaseMetaData dbmd;     

        BD basedados;
        basedados = new BD();
        database1 = "" + db1.value;
        if (!database1.equals("null")) {
            while (!basedados.ConectarBD());
        }
    }
}

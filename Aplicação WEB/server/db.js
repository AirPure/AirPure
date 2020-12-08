const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",   //Usuario
    password: "10052019",   //Senha
    host: "server01.matsoftwares.com.br",   //IP
    port: 5432, //Porta
    database: "perntodo"    //Banco de dados
});

module.exports = pool;
//RESTFUL API 
//Dependencias
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//Middleware
app.use(cors());
app.use(express.json());

//Rotas da aplicacao

//Cria um registro
app.post("/todos",async(req,res)=>{
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",[description]);
        console.log(req.body);
        res.json(newTodo.rows[0]);  //Retorna o dado que foi inserido
    } catch (err) {
        console.error(err.message);
    }
});

//Retorna todos os registros
app.get("/todos",async(req,res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);    
    } catch(err){
        console.log(err.message);
    }
});

//Obtem um registro
app.get("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);

        res.json(todo.rows);
    } catch(err){
        console.log(err.message);
    }
});

//Atualiza um registro
app.put("/todos/:id",async(req,res)=>{
    try{

        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
 
        res.json("Todo was updated!");
    } catch(err){
        console.log(err.message);
    }
});

//Deleta um registro
app.delete("/todos/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("Todo was deleted!");
    } catch(err){
        console.log(err.message);
    }
});

app.listen(5000, ()=> {
    console.log("Server has started on localhost:5000!...");
});
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());

app.use(cors());

// ROUTES


// ADD A NEW EMPLOYEE
app.post("/users/",async(req,res)=>{
    try {
        const myquery = "INSERT INTO employees(fullname,age,address)VALUES($1,$2,$3)";
        const employee = await db.query(myquery,[req.body.name,req.body.age,req.body.address]);
        res.json(employee);
    } catch (err) {
        console.error(err.message);
    }
});

// GET ALL EMPLOYEES 

app.get("/users/",async(req,res)=>{
    try {
        const employees = await db.query("SELECT * FROM employees ");
        res.json(employees.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// GET A SPECIFIC EMPLOYEE

app.get("/users/:username",async(req,res)=>{
    try {
        const username = req.params.username;
        const match  = await db.query("SELECT * FROM employees WHERE fullname=$1",[username]);
        res.json(match.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// UPDATE AN EMPLOYEE NAME

app.patch("/users/:id/:newname",async(req,res)=>{
    try {
        const {id} = req.params;
        const {newname} = req.params;
        const updating = await db.query("UPDATE employees SET fullname=$1 WHERE userid=$2",[newname,id]);
        res.json(updating.rows);

    } catch (err) {
        console.error(err.message);
    }
});

// DELETING AN EMPLOYEE 

app.delete("/users/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleting = await db.query("DELETE FROM employees WHERE userid=$1",[id]);
        res.send(`Record with id of ${id} was deleted successfully`);
    } catch (err) {
        console.error(err.message);
    }
});


// TESTING PURPOSES ENDPOINT

app.get("/fake/:id",async(req,res)=>{
    const {id} = req.params;
    res.send(id);
})

app.listen(5000,()=>console.log("Server is up and running!"));
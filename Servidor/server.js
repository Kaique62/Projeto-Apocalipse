const express = require("express");
const paths = require("./paths");
const db = require("./database.js")
const fs= require('fs')
const cors = require('cors')
const bodyparser = require("body-parser");
const { stringify } = require("querystring");

var app = express();
const port = 3000;

app.use(bodyparser.json({limit: "50mb"}))
app.use(cors())

app.use(express.static("Cliente/Paginas"))

app.get('/', (req, res) => {
    res.sendFile(paths.getPage("MainPage"));
});

app.get('/login', (req, res) => {
    res.sendFile(paths.getPage("Login"));
});

app.get('/perfil', (req, res) => {
    res.sendFile(paths.getPage("Perfil"));
});

app.get('/agendamento', (req, res) => {
    res.sendFile(paths.getPage("Agendamento"));
});

app.get('/clientes', (req, res) => {  
    try {
        const results = db.Select();
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar clientes.');
    }
});

app.post('/upload', (req, res) =>{
    const infos = req.body
    if (infos.type == "add")
       db.UpInsert(`INSERT INTO clientes (Nome, Idade, UF) VALUES(?, ?, ?)`, [infos.Name, infos.Idade, infos.UF])

})


app.listen(port);
console.log("Server Running on localhost:" + port);
const express = require("express");
const paths = require("./paths");
const db = require("./database.js")

var app = express();
const port = 3000;

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

app.get('/clientes', async (req, res) => {  
    try {
        const results = await selectCustomers();
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar clientes.');
    }
});

app.listen(port);
console.log("Server Running on localhost:" + port);
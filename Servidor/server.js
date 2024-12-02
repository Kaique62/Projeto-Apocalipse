const express = require("express");
const paths = require("./paths")

var app = express();
const port = 3000;

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

app.listen(port);
console.log("Server Running on localhost:" + port);
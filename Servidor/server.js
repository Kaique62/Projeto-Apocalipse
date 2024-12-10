const express = require("express");
const paths = require("./paths");
const db = require("./database.js")
const cors = require('cors')
const bodyparser = require("body-parser");
const { stringify } = require("querystring");
const { info } = require("console");

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

app.get('/clientes',async (req, res) => {  
    try {
        const results = await db.Select();
        console.log(results)
        res.json(results);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).json({ error: 'Erro ao buscar clientes.' });
    }
});


app.post('/upload', (req, res) =>{
    const infos = req.body
    if (infos.type == "add"){
        db.UpInsert(`INSERT INTO clientes (Nome, Idade, UF) VALUES(?, ?, ?)`, [infos.Name, infos.Idade, infos.UF])
    }
    else if (infos.type == "delete"){
        db.Delete(`DELETE FROM clientes WHERE Nome = ?`, [infos.Name])
    }
    else if (infos.type == "update"){
        db.Update(`UPDATE clientes SET Idade = ? Where Nome = ?`, [infos.Idade, infos.Name])
    }

})



app.listen(port);
console.log("Server Running on localhost:" + port);
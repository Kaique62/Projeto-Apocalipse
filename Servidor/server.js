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
    console.log(paths.getPage("Agendamento"));
    res.sendFile(paths.getPage("Agendamento"));
});

app.post('/upload', async (req, res) =>{
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
    else if (infos.type == "select"){
        try {
            const rows = await db.Select(`SELECT * FROM clientes_profissional WHERE email = ? AND senha = ?`, [infos.userLogin, infos.passwordLogin])
            console.log(rows)
            if (rows.length > 0){
                console.log("ab")
            }
        } catch (error) {
            console.error('Erro no SELECT:', error.message);

        }
    }


})

app.listen(port);
console.log("Server Running on localhost:" + port);
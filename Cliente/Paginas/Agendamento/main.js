const express = require('express');
const db = require('./db');
const path = require('path')
const app = express();


app.get('/clientes', async (req, res) => {  
    try {
        const results = await db.selectCustomers();
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar clientes.');
    }
});


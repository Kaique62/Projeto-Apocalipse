const { query } = require("express");
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'estetica',
    user: 'root',
    password: 'acesso123'
}).promise();

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar:', err);
    } else {
        console.log('Conexão bem-sucedida!');
    }
});
 
async function Select(query, values){
    const [rows] = await connection.execute(query, values);
    return rows;
}

function UpInsert(query, values){
    connection.execute(query, values)
}

function Delete(query, values){
    connection.execute(query, values)
}

function Update(query, values){
    connection.execute(query, values)
}
module.exports = {UpInsert, Select, Delete, Update};
const mysql = require("mysql2") 
const cliente = mysql.createConnection({
    host: 'localhost',
    database: 'teste_js',
    user: 'root',
    password: 'acesso123'
}).promise();

cliente.connect(err => {
    if (err) {
        console.error('Erro ao conectar:', err);
    } else {
        console.log('Conexão bem-sucedida!');
    }
});
 
async function selectCustomers() {
    const [rows] = await cliente.query('SELECT * FROM clientes');
    return rows;
}

async function UpInsert(query){
    const [results] = await cliente.query(query)
    console.log(results);
    return results;
}

module.exports = { UpInsert }
module.exports = { selectCustomers };

console.log("API Funcionando")

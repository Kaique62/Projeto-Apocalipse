
function botar(){
    a = document.getElementById("Nome");
    b = document.getElementById("Idade");
    c = document.getElementById("UF");
    db.UpInsert(`INSERT INTO clientes (Nome, Idade, UF) VALUES('${a}', '${b}', '${c}')`)
}
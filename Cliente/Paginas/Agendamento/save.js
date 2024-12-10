function usefetch(obj){
    fetch('http://localhost:3000/upload', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'content-type': "application/json; charset=UTF-8",
        }
    });
}
function insert(){
    a = document.getElementById("Nome");
    b = document.getElementById("Idade");
    c = document.getElementById("UF");
    let obj = {"Name": a, "Idade": b, "UF": c, "type": "add"}
    usefetch(obj)
}

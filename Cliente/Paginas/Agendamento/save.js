function insert(){
    fetch('http://localhost:3000/upload', {
        method: "POST",
        body: JSON.stringify({
            "Name": document.getElementById("Nome").value, 
            "Idade": document.getElementById("Idade").value, 
            "UF":document.getElementById("UF").value, 
            "type": "add"
        }),
        headers: {
            'content-type': "application/json; charset=UTF-8",
        }
    });
}


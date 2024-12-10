function Insert(){
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
};

function Delete(){
    fetch('http://localhost:3000/upload', {
        method: "POST",
        body: JSON.stringify({
            "Name": document.getElementById("Nome").value, 
            "Idade": document.getElementById("Idade").value, 
            "UF":document.getElementById("UF").value, 
            "type": "delete"
        }),
        headers: {
            'content-type': "application/json; charset=UTF-8",
        }
    });
};

function Update(){
    fetch('http://localhost:3000/upload', {
        method: "POST",
        body: JSON.stringify({
            "Name": document.getElementById("Nome").value, 
            "Idade": document.getElementById("Idade").value, 
            "UF":document.getElementById("UF").value, 
            "type": "update"
        }),
        headers: {
            'content-type': "application/json; charset=UTF-8",
        }
    });
}
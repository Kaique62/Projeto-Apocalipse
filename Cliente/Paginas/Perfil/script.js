var agendamentos = [
    {"Data": "11/12/2024", "Profissional": "Laila", "Procedimento": "Limpeza", "Status": "Pendente"},
    {"Data": "12/12/2024", "Profissional": "Ketleen", "Procedimento": "Massagem", "Status": "Realizado"},
    {"Data": "13/12/2024", "Profissional": "Laila", "Procedimento": "Hidratação", "Status": "Realizado"},
    {"Data": "14/12/2024", "Profissional": "Ketleen", "Procedimento": "Corte de Cabelo", "Status": "Realizado"},
    {"Data": "15/12/2024", "Profissional": "Laila", "Procedimento": "Depilação", "Status": "Realizado"},
    {"Data": "16/12/2024", "Profissional": "Ketleen", "Procedimento": "Limpeza de Pele", "Status": "Realizado"},
    {"Data": "17/12/2024", "Profissional": "Laila", "Procedimento": "Manicure", "Status": "Realizado"},
    {"Data": "18/12/2024", "Profissional": "Ketleen", "Procedimento": "Massagem Relaxante", "Status": "Realizado"},
    {"Data": "19/12/2024", "Profissional": "Laila", "Procedimento": "Pedicure", "Status": "Realizado"},
    {"Data": "20/12/2024", "Profissional": "Ketleen", "Procedimento": "Escova Progressiva", "Status": "Realizado"}
  ]; //Exemplo

var minhasConsultasFrame = document.getElementById("minhasConsultas");

function loadAgendamentos(){
    removeAgendamentos();
    for (let i = 0; i < 6; i++){
        let consultaDiv = document.createElement("div");
        consultaDiv.id = "consultas" + i;

        let data = document.createElement("label");
        data.className = "consultasLabel";
        data.innerHTML = "Data: " + agendamentos[i]["Data"];

        let profissional = document.createElement("label");
        profissional.className = "consultasLabel";
        profissional.innerHTML = "Profissional: " + agendamentos[i]["Profissional"];

        let procedimento = document.createElement("label");
        procedimento.className = "consultasLabel";
        procedimento.innerHTML = "Procedimento: " + agendamentos[i]["Procedimento"];

        let status = document.createElement("label");
        status.className = "consultasLabel";
        status.innerHTML = "Status: " + agendamentos[i]["Status"];

        consultaDiv.appendChild(data);
        consultaDiv.appendChild(profissional);
        consultaDiv.appendChild(procedimento);
        consultaDiv.appendChild(status);

        if (agendamentos[i]["Status"] == "Pendente")
            consultaDiv.className = "consultas pendente";
        else {
            consultaDiv.className = "consultas realizado";
        }
        minhasConsultasFrame.appendChild(consultaDiv);
        console.log(consultaDiv);
    }
}

function removeAgendamentos() {
    console.log(minhasConsultasFrame.children.length);
    while (minhasConsultasFrame.firstChild){
        minhasConsultasFrame.removeChild(minhasConsultasFrame.lastChild);
    }
}

loadAgendamentos();

function EditInfo() {
    document.getElementById("tudo").style.display = 'none'
    document.getElementById("popup").style.display = 'flex'

    var inputN = document.getElementById("nameEdit")
    var inputG = document.getElementById("generoedit")
    var inputD = document.getElementById("dataedit")
    var inputT = document.getElementById("telEdit")
    var inputE = document.getElementById("emailEdit")

    inputN.value = document.getElementById("nomeDefinido").innerHTML
    inputG.value = document.getElementById("generoDefinido").innerHTML
    inputD.value = document.getElementById("DataNascDefinida").innerHTML
    inputT.value = document.getElementById("telefoneDefinido").innerHTML
    inputE.value = document.getElementById("emailDefinido").innerHTML
}

function Editado() {
    var nome = document.getElementById("nameEdit").value
    var genero = document.getElementById("generoedit").value
    var data = document.getElementById("dataedit").value
    var tel = document.getElementById("telEdit").value
    var email = document.getElementById("emailEdit").value

    document.getElementById("nomeDefinido").innerHTML = nome
    document.getElementById("generoDefinido").innerHTML = genero
    document.getElementById("DataNascDefinida").innerHTML = data
    document.getElementById("telefoneDefinido").innerHTML = tel
    document.getElementById("emailDefinido").innerHTML = email

    document.getElementById("tudo").style.display = 'flex'
    document.getElementById("popup").style.display = 'none'
}
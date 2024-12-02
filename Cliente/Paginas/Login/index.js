var usuariosCadastrados = {};

function cadastrar(){
    let informationID = ["emailCadastro", "passwordCadastro", "nameCadastro", "nascimentoCadastro", "generoCadastro", "telefoneCadastro"]
    let dicionario = {}
    for (let i = 0; i < informationID.length; i++){
        if (document.getElementById(informationID[i]).value.trim() == "");
        console.log("Preencha Todos os Campos!");
        dicionario[informationID[i]] = document.getElementById(informationID[i]).value;
    }
}

function login(){
    let user = document.getElementById("userLogin").value;
    let senha = document.getElementById("passwordLogin").value;
 
    if (user.trim() == "" | senha.trim() == ""){
        console.log("Preencha Todos os Campos!");
    }
    else {
        console.log(`Usuário: ${user}\n` 
            + `Senha: ${senha}`);
    }
}

function changeMode(){
    document.getElementById("divCadastro").style.display = document.getElementById("divCadastro").style.display == "none" ? "block": "none"
    document.getElementById("divLogin").style.display = document.getElementById("divLogin").style.display == "none" ? "block": "none"
}
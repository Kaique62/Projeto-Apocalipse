var usuariosCadastrados = {};

var triangleImage = document.getElementById("triangle");

function resizeTriangle() {
    triangleImage.style.backgroundPosition = `-${0 + (1920 - window.innerWidth)}px`;
}

addEventListener("resize", resizeTriangle);

function cadastrar(){
    let informationID = ["emailCadastro", "passwordCadastro", "nameCadastro", "nascimentoCadastro", "generoCadastro", "telefoneCadastro"]
    let dicionario = {}
    for (let i = 0; i < informationID.length; i++){
        if (document.getElementById(informationID[i]).value.trim() == "");
        console.log("Preencha Todos os Campos!");
        dicionario[informationID[i]] = document.getElementById(informationID[i]).value;
    }
    console.log(dicionario);
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
    document.getElementById("cadastrar").style.display = document.getElementById("cadastrar").style.display == "flex" ? "none": "flex"
    document.getElementById("login").style.display = document.getElementById("login").style.display == "none" ? "flex": "none"
}

function PasswordVisibility(){

}
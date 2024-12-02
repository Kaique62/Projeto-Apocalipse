var usuariosCadastrados = {};

function cadastrar(){
    
}

function login(){
    let user = document.getElementById("loginInput").value;
    let senha = document.getElementById("passwordInput").value;
 
    if (user.trim() == "" | senha.trim() == ""){
        console.log("Preencha Todos os Campos!");
    }
    else {
        console.log(`Usuário: ${user}\n` 
            + `Senha: ${senha}`);
    }
}
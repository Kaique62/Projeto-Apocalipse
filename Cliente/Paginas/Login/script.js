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
            + `Senha: ${senha}`)
    }
}

function cadastro() {
    let name = document.getElementById("nameCadastro").value;

    let sexo;
    if (document.getElementById("sexoMascCadastro").checked) {
        sexo = 'Masculino'
    } 
    else if (document.getElementById("sexoFemCadastro").checked) {
        sexo = 'Feminino'
    } 
    else if (document.getElementById("sexoOutroCadastro").checked) {
        sexo = 'Outro'
    }

    let dataNasc = document.getElementById("nascimentoCadastro").value;

    let telefone = document.getElementById("telefoneCadastro").value;

    let emailRegister = document.getElementById("emailCadastro").value;

    let senhaCadastro;
    if (document.getElementById("passwordCadastro").value != document.getElementById("confirmPasswordCadastro").value) {
        senhaCadastro = 'As senhas não coinscidem'
    } else {
        senhaCadastro = document.getElementById("passwordCadastro").value
    }

    if (name.trim() == "" | sexo.trim() == "" | dataNasc.trim() == "" | telefone.trim() == "" | emailRegister.trim() == "" | senhaCadastro.trim() == ""){
        console.log("Preencha Todos os Campos!");
    }
    else {
        console.log(`Nome: ${name}\n` 
            + `Sexo: ${sexo}\n`
            + `Data de Nascimento: ${dataNasc}\n`
            + `Telefone: ${telefone}\n`
            + `Email: ${emailRegister}\n`
            + `Senha: ${senhaCadastro}`)
    }
}

function cadastrar() {
    document.getElementById('login').style.display = 'none';
    document.getElementById("cadastrar").style.display = 'flex';
}

function voltar() {
    document.getElementById('login').style.display = 'flex';
    document.getElementById("cadastrar").style.display = 'none';
}
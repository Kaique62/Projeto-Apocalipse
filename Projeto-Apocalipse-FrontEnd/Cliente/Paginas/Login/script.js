var usuariosCadastrados = {};

var triangleImage = document.getElementById("triangle");

function resizeTriangle() {
    triangleImage.style.backgroundPosition = `-${0 + (1920 - window.innerWidth)}px`;
}

addEventListener("resize", resizeTriangle);

document.getElementById("telefoneCadastro").addEventListener("input", function (e) {
    let telefone = e.target.value.replace(/\D/g, "");
    if (telefone.length > 11) telefone = telefone.slice(0, 11);
    if (telefone.length > 6) {
        e.target.value = `(${telefone.slice(0, 2)})${telefone.slice(2, 7)}-${telefone.slice(7)}`;
    } else if (telefone.length > 2) {
        e.target.value = `(${telefone.slice(0, 2)})${telefone.slice(2)}`;
    } else {
        e.target.value = telefone;
    }
});

function cadastrar() {
    const nome = document.getElementById("nameCadastro").value.trim();
    const genero = document.querySelector("input[name='genero']:checked");
    const nascimento = document.getElementById("nascimentoCadastro").value;
    const telefone = document.getElementById("telefoneCadastro").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const senha = document.getElementById("passwordCadastro").value;
    const confirmarSenha = document.getElementById("confirmPasswordCadastro").value;
    const alertas = document.getElementById("Alertas2");

    alertas.textContent = "";

    if (!nome || !genero || !nascimento || !telefone || !email || !senha || !confirmarSenha) {
        alertas.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (!nome) {
        alertas.textContent = "Por favor, insira seu nome.";
        return;
    }

    if (!genero) {
        alertas.textContent = "Por favor, selecione seu gênero.";
        return;
    }

    const anoNascimento = new Date(nascimento).getFullYear();
    const anoAtual = new Date().getFullYear();
    if (anoNascimento < 1900 || anoNascimento >= anoAtual) {
        alertas.textContent = "Por favor, insira uma data de nascimento válida (entre 1900 e o ano passado).";
        return;
    }

    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        alertas.textContent = "Por favor, insira um telefone válido no formato (XX)XXXXX-XXXX.";
        return;
    }

    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(email)) {
        alertas.textContent = "Por favor, insira um e-mail válido.";
        return;
    }

    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!senhaForteRegex.test(senha)) {
        alertas.textContent =
            "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.";
        return;
    }

    if (senha !== confirmarSenha) {
        alertas.textContent = "As senhas não coincidem.";
        return;
    }

    const dadosCadastro = {
        nome,
        genero: genero.value,
        nascimento,
        telefone,
        email,
        senha,
    };

    console.log("Dados de cadastro:", dadosCadastro);
    alertas.textContent = "Cadastro realizado com sucesso!";
    enviar_email_cadastro()
    changeMode_2('cadastrar')
}


function startTimer(duration, display, callback) {
    var timer = duration, minutes, seconds;

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            if (callback) {
                numero_aleatorio = "";
                callback();
            }
        }
    }, 1000);
}

function iniciar() {
    var duration = 30;
    var display = document.querySelector('#timer');

    startTimer(duration, display, function () {
        alert("O tempo acabou! O número aleatório foi apagado.");
        console.log(numero_aleatorio)
    });
}

function verificar_codigo() {
    const codigoInserido = document.getElementById('codigo_verificador').value;
    const alertas = document.getElementById('alertas_verificacao');
    alertas.textContent = "";

    const codigoCorreto = sessionStorage.getItem("codigo");
    console.log(codigoCorreto)
    
    if (codigoCorreto && codigoInserido === codigoCorreto) {
        alertas.textContent = "Código correto! Você foi autenticado.";
    } else {
        alertas.textContent = "Código incorreto! Tente novamente.";
    }
}


function enviar_email_cadastro() {
    const emailInput = document.getElementById('emailCadastro').value;
    const passwordInput = document.getElementById('passwordCadastro').value;

    const min = 1000;
    const max = 9999;
    var numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Código gerado: ", numero_aleatorio);

    localStorage.setItem("codigo", numero_aleatorio);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("senha", passwordInput);

    const templateParams = {
        to_email: emailInput,
        from_name: "Gabriel",
        from_email: "suportapp02@gmail.com",
        subject: "EsticaFlow Código de Verificação de cadastro",
        code: numero_aleatorio
    };

    emailjs.send("service_00abt2c", "template_86j57na", templateParams)
        .then(function(response) {
            alertas.textContent = "E-mail enviado com sucesso!";
        }, function(error) {
            alertas.textContent = "Erro ao enviar e-mail: " + error.text;
        });
}


function enviar_email_login() {
    const emailInput = document.getElementById('userLogin').value;
    const passwordInput = document.getElementById('passwordLogin').value;
    const alertas = document.getElementById('alertas');
    const verificarEmail = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

    alertas.textContent = "";

    if (!verificarEmail.test(emailInput)) {
        alertas.textContent = "Por favor, insira um endereço de e-mail válido.";
        return;
    }

    if (!passwordInput) {
        alertas.textContent = "Por favor, preencha o campo de senha.";
        return;
    }

    const min = 1000;
    const max = 9999;
    var numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Código gerado: ", numero_aleatorio);

    localStorage.setItem("codigo", numero_aleatorio);

    localStorage.setItem("codigo", numero_aleatorio);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("senha", passwordInput);

    const templateParams = {
        to_email: emailInput,
        from_name: "Gabriel",
        from_email: "suportapp02@gmail.com",
        subject: "EsticaFlow Código de Verificação",
        code: numero_aleatorio
    };

    emailjs.send("service_00abt2c", "template_86j57na", templateParams)
        .then(function(response) {
            alertas.textContent = "E-mail enviado com sucesso!";
        }, function(error) {
            alertas.textContent = "Erro ao enviar e-mail: " + error.text;
        });
        changeMode_2('login')
}

function changeMode_2(tela_mudança){
    document.getElementById("tela_verificaçao").style.display = document.getElementById("tela_verificaçao").style.display == "flex" ? "none": "flex"
    document.getElementById(tela_mudança).style.display = document.getElementById(tela_mudança).style.display == "none" ? "flex": "none"
    iniciar()
}

function changeMode(){
    document.getElementById("cadastrar").style.display = document.getElementById("cadastrar").style.display == "flex" ? "none": "flex"
    document.getElementById("login").style.display = document.getElementById("login").style.display == "none" ? "flex": "none"
}

function PasswordVisibility(id){
    let element = document.getElementById(id);
    element.getAttribute("type") == "password" ? element.setAttribute("type", ""): element.setAttribute("type", "password");

    let eyePass = document.getElementsByClassName(id)[0];
    eyePass.getAttribute("name") == "eye-outline" ? eyePass.setAttribute("name", "eye-off-outline") : eyePass.setAttribute("name", "eye-outline")

    console.log()
}
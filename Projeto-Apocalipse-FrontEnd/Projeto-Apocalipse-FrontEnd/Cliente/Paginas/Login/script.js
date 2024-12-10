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
    localStorage.setItem("local","cadastrar")
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

    const dadosCadastro = {
        nome:nome,
        genero: genero.value,
        nascimento:nascimento,
       telefone: telefone,
        email:email,
        senha:senha,
    };

    console.log("Dados de cadastro:", dadosCadastro);
    localStorage.setItem("dados_cadastro", JSON.stringify(dadosCadastro));

    /*alertas.textContent = "Cadastro realizado com sucesso!";*/
    enviar_email_cadastro()
    
}

function reinviar_codigo() {
    const emailInput = localStorage.getItem("email");

    if (!emailInput) {
        alert("Nenhum e-mail associado encontrado. Por favor, faça login ou cadastre-se novamente.");
        return;
    }

    const min = 1000;
    const max = 9999;
    const numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Novo código gerado:", numero_aleatorio);

    sessionStorage.setItem("codigo", numero_aleatorio);

    const templateParams = {
        to_email: emailInput,
        from_name: "Gabriel",
        from_email: "andreluis5rabelo@gmail.com",
        subject: "EsticaFlow Código de Verificação",
        code: numero_aleatorio
    };

    emailjs.send("service_dd5wghg", "template_fs3lbid", templateParams)
        .then(function (response) {
            const alertas = document.getElementById("alertas_verificacao");
            alertas.textContent = "O código foi reenviado para o seu e-mail.";
            alertas.style.color = "green";
        }, function (error) {
            const alertas = document.getElementById("alertas_verificacao");
            alertas.textContent = "Erro ao reenviar o e-mail: " + error.text;
            alertas.style.color = "red";
        });

    const display = document.querySelector('#timer');
    startTimer(30, display, function () {
        const alertas = document.getElementById("alertas_verificacao");
        alertas.textContent = "O código expirou! Solicite um novo.";
        alertas.style.color = "red";
        sessionStorage.removeItem("codigo");
    });
}


let timerInterval = null;

function startTimer(duration, display, callback) {
    let timer = duration;
    let minutes, seconds;

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    timerInterval = setInterval(function () {
        minutes = Math.floor(timer / 60); 
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (display) {
            display.textContent = `${minutes}:${seconds}`;
        }

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            sessionStorage.removeItem("codigo");
            console.log("Código removido devido à expiração.");
            if (callback) {
                callback();
            }
        }
    }, 1000);
}

function iniciar() {
    console.log("Iniciando o processo...");

    const alertas = document.getElementById("alertas_verificacao");
    alertas.textContent = "";

    const display = document.querySelector('#timer');
    startTimer(30, display, function () {
        alertas.textContent = "O código expirou! Solicite um novo.";
        alertas.style.color = "red";
    });
}

function verificar_codigo() {
    const codigoInserido = document.getElementById('codigo_verificador').value;
    const alertas = document.getElementById('alertas_verificacao');
    alertas.textContent = "";

    const codigoCorreto = sessionStorage.getItem("codigo");

    if (codigoCorreto && codigoInserido === codigoCorreto) {
        alertas.textContent = "Código correto! Você foi autenticado.";
        sessionStorage.removeItem("codigo");
        var local = localStorage.getItem("local")
        if (local=="cadastrar"){
           const dados_cadastro = JSON.parse(localStorage.getItem("dados_cadastro"));
           enviarDados()
        } else{
            //olar se existe no sistema i verificar a senha
             //page nova 
        }
    } else {
        alertas.textContent = "Código incorreto! Tente novamente.";
    }
}

function enviarDados(dados_cadastro) {
    if (!dados_cadastro) {
        console.error("Erro: Dados de cadastro não fornecidos.");
        return;
    }

    const dados = { dados_cadastro };

    fetch('https://tan-dolphin-355268.hostingersite.com', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dados),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText} (${response.status})`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Resposta do servidor:", data);
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro no cadastro: " + data.message);
        }
    })
    .catch(error => {
        console.error("Erro na comunicação:", error);
        alert("Ocorreu um problema ao se comunicar com o servidor. Tente novamente mais tarde.");
    });
}


function enviar_email_cadastro() {
    const emailInput = document.getElementById('emailCadastro').value;


    const min = 1000;
    const max = 9999;
    var numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Código gerado: ", numero_aleatorio);

    sessionStorage.setItem("codigo", numero_aleatorio);
    localStorage.setItem("email", emailInput);


    const templateParams = {
        to_email: emailInput,
        from_name: "Gabriel",
        from_email: "andreluis5rabelo@gmail.com",
        subject: "EsticaFlow Código de Verificação de cadastro",
        code: numero_aleatorio
    };

    emailjs.send("service_dd5wghg", "template_fs3lbid", templateParams)
        .then(function (response) {
            alertas.textContent = "Enviamos um código de verificação, por favor, verifique seu email.";
        }, function (error) {
            alert("Erro ao enviar e-mail: " + error.text);
        });

    changeMode_2('cadastrar');
    const display = document.querySelector('#timer');
    startTimer(30, display, function () {
        const alertas = document.getElementById("alertas_verificacao");
        alertas.textContent = "O código expirou! Solicite um novo.";
        alertas.style.color = "red";
        sessionStorage.removeItem("codigo");
    });
}


function enviar_email_login() {
    localStorage.setItem("local","login")
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

    sessionStorage.setItem("codigo", numero_aleatorio);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("senha", passwordInput);

    const templateParams = {
        to_email: emailInput,
        from_name: "Gabriel",
        from_email: "andreluis5rabelo@gmail.com",
        subject: "EsticaFlow Código de Verificação",
        code: numero_aleatorio
    };

    emailjs.send("service_dd5wghg", "template_fs3lbid", templateParams)
        .then(function (response) {
            alertas.textContent = "Enviamos um código de verificação, por favor, verifique seu email.";
        }, function (error) {
            alert("Erro ao enviar e-mail: " + error.text);
        });

    changeMode_2('login');
    const display = document.querySelector('#timer');
    startTimer(30, display, function () {
        const alertas = document.getElementById("alertas_verificacao");
        alertas.textContent = "O código expirou! Solicite um novo.";
        alertas.style.color = "red";
        sessionStorage.removeItem("codigo");
    });
}


function changeMode_2(tela_mudança, acao = "") {
    if (tela_mudança ==null || !tela_mudança){
        var tela_mudança =localStorage.getItem("local")
    }
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    if (acao === "voltar") {
        sessionStorage.removeItem("codigo");
        const alertas = document.getElementById("alertas_verificacao");
        alertas.textContent = "";
        document.getElementById("timer").textContent = "";
    }

    document.getElementById("tela_verificaçao").style.display = 
        document.getElementById("tela_verificaçao").style.display === "flex" ? "none" : "flex";

    document.getElementById(tela_mudança).style.display = 
        document.getElementById(tela_mudança).style.display === "none" ? "flex" : "none";

    if (acao !== "voltar" && tela_mudança === "tela_verificaçao") {
        const display = document.querySelector('#timer');
        startTimer(30, display, function () {
            const alertas = document.getElementById("alertas_verificacao");
            alertas.textContent = "O código expirou! Solicite um novo.";
            alertas.style.color = "red";
            sessionStorage.removeItem("codigo");
        });
    }
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
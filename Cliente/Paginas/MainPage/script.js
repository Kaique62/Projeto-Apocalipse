function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';}

// Função para fechar o chatbot
    function closeChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.style.display = 'none';}

// Função para exibir a resposta do chatbot
    function handleOption(option) {
    const resposta = chatbotResponder(option);
    const responseDiv = document.getElementById('chatbotResponse');
    responseDiv.innerHTML = resposta;}

    // Função para exibir a resposta do chatbot
    function handleOption(option) {
        const resposta = chatbotResponder(option);
        const responseDiv = document.getElementById('chatbotResponse');
        responseDiv.innerHTML = resposta;
    }

    // Função para lidar com a pergunta do usuário
    function sendUserQuestion() {
        const userQuestion = document.getElementById('userQuestion').value;
        const resposta = chatbotResponder(userQuestion);
        const responseDiv = document.getElementById('chatbotResponse');
        responseDiv.innerHTML = resposta;

        // Limpar o campo de input após a pergunta
        document.getElementById('userQuestion').value = '';
    }

// Função que define as respostas do chatbot
function chatbotResponder(mensagem) {
    const respostas = {
        "oi": "Olá! Como posso ajudar você hoje?",
        "qual é o seu nome?": "Eu sou um chatbot criado para ajudá-lo no salão de beleza.",
        "sim": "para mais informações sobre nossos serviços, por favor, entre em contato conosco pelo telefone (37) 1234-5678.",
        "como você está?": "Estou funcionando conforme programado! E você?",
        "adeus": "Tchau! Tenha um ótimo dia! Volte sempre!",
        "quais serviços você oferece?": "Oferecemos cortes de cabelo, coloração, manicure, pedicure, depilação e outros serviços de beleza. Qual serviço você está interessado?",
        "qual é o horário de funcionamento?": "Estamos abertos de segunda a sexta, das 9h às 18h, e aos sábados das 9h às 14h.",
        "como posso agendar um horário?": "Você pode agendar um horário pelo botão 'Fazer uma consulta' em nosso site ou ligar para o nosso número de contato.",
        "qual o preço de um corte de cabelo?": "O preço do corte de cabelo varia de acordo com o estilo. Você gostaria de saber o preço para um corte específico?",
        "tem alguma promoção hoje?": "Sim, estamos oferecendo 10% de desconto em todos os serviços de manicure. Aproveite!",
        "tem serviço de depilação?": "Sim, temos depilação com cera, disponível para várias partes do corpo.",
        "qual é a localização do salão?": "Estamos localizados na Rua Exemplo, 123, no centro da cidade. Venha nos visitar!",
        "tem estacionamento?": "Sim, temos estacionamento gratuito para nossos clientes.",
        "quais formas de pagamento vocês aceitam?": "Aceitamos cartões de crédito, débito e pagamentos em dinheiro.",
        "vocês tem serviços para noivas?": "Sim, temos pacotes especiais para noivas, incluindo cabelo, maquiagem e outros serviços. Gostaria de saber mais?",
        "quais cuidados eu devo ter com meu cabelo depois de fazer uma coloração?": "Após a coloração, recomendamos evitar lavar o cabelo por 48 horas e usar produtos específicos para cabelos tingidos.",
        "como posso cuidar das minhas unhas?": "Recomendamos hidratar as unhas regularmente e evitar o uso excessivo de produtos químicos. Se precisar de manicure, podemos agendar!"
    };

// Converte a mensagem para minúsculas
        mensagem = mensagem.toLowerCase();

// Retorna a resposta ou uma mensagem padrão
        return respostas[mensagem] || "Desculpe, não entendi a sua pergunta. Posso ajudar com mais alguma coisa?";}
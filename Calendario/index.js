var diasFrame = document.getElementById("DiasDaSemana");
var mesFrame = document.getElementById("DiasDoMes");

createDayOfWeek();
createMonthDays();
fixPos();

function countDays(mes, ano) { 
    class Info { // Classe responsável por gerar Informações de determinado mês
      constructor() {
        this.mes = mes;
        this.ano = ano;
        this.dias = new Date(this.ano, this.mes, 0).getDate(); // pega quantidade total de dias
        this.diaInicial = new Date(`${this.ano}-${this.mes}-1`).getDay(); //Pega o valor do dia da semana inicial do mês
      }
    }
    return new Info;
}

function createDayOfWeek(){
    let innerText = ["D", "S", "T", "Q", "Q", "S", "S"]; //dias da semana
    for (let i = 0; i < innerText.length; i++){ // Loop para criar divs com os dias da semana no calendario
        let dia = document.createElement("div");
        dia.className = "FramesSemana";
        if (i == 6)
            dia.className = "FramesSemana borderlessRight"
        dia.innerHTML = innerText[i];
        diasFrame.append(dia);
    }
}

function createMonthDays() { // Similar a função "createDayOfWeek" porém para criar os dias do mês
    let row = 0;
    for (let i = 0; i < 35; i++){
        if (i%7 == 0 & i != 0)
            row++;

        let dia = document.createElement("div");
        
        if (row == 4 & i%7 == 6)
            dia.className = "FramesSemana borderlessDown borderlessRight";
        else if (i%7 == 6)
            dia.className = "FramesSemana borderlessRight";
        else if (row == 4)
            dia.className = "FramesSemana borderlessDown";
        else
            dia.className = "FramesSemana";

        dia.id = row + "/" + i%7;
        dia.innerHTML = "x";

        console.log("Grid: "+ row + "/" + i%7 + "/ dia" + dia.className)

        mesFrame.append(dia);
    }
}

function fixPos() {
    let done = false; // Booleana utilizada para definir se todos os dias do mês ja foram preenchidos
  
    let mes = "12"; // valor do mês atual
    let ano = "2024" // valor do ano atual
  
    let infoAtual = countDays(mes, ano); // Coleta as informações do mês
  
    let row = 0; // fileira atual da grid
    let data = 0; //numero do dia
  
    if (mes != "" & ano != ""){ // confere se há texto nos inputs
      for (let i = 0; i < 35; i++){ // Loop para preencher informações dos frames
        if (i%7 == 0 & i != 0) // caso chegue no 7 elemento da fileira passa para a próxima
          row++; 
  
        let element = document.getElementById(`${row}/${i%7}`); // pega o valor do frame atual
  
        if (i >= infoAtual.diaInicial & !done){ // confere se o frame atual esta maior ou igual ao dia da semana inicial
          if (data == infoAtual.dias - 1)
            done = true; // caso preencha todos os frames com os determinados dias define como "realizado"
  
          data++;
          element.innerHTML = data; // coloca data no frame
        }
        else {
          element.innerHTML = ""; // preenche os frames restante com espaços vazios
        }
        
        if (element.innerHTML != ""){ //Atribuição de Função onclick
          element.onclick = () => {
            console.log("Click!")
          }
        }
      }
    }
    else {
      console.log("Preencha todos os Campos!")
    }
  }
var last = "";
var hour_select = "";

function kattlen() {
    for (let i = 0; i < 6; i++){
        if (i < 3)
            document.getElementById("option-" + (i + 1)).disabled = false;
        else{
            document.getElementById("option-" + (i + 1)).disabled = true;
            document.getElementById("option-" + (i + 1)).checked = false;
        }
    }
}

function laila() {
    for (let i = 0; i < 6; i++){
        if (i < 3){
            document.getElementById("option-" + (i + 1)).disabled = true;
            document.getElementById("option-" + (i + 1)).checked = false;
        }
        else {
            document.getElementById("option-" + (i + 1)).disabled = false;
            document.getElementById("option-" + (i + 1)).checked = false;
        }
    }
}

function createHourAtDays() {
    let today = new Date;
    let days = [
        document.getElementById('select-day'),
        document.getElementById('d2'),
        document.getElementById('d3'),
        document.getElementById('d4'),
        document.getElementById('d5')
    ];
    let hours = ["13:30", "14:00", '14:30', "15:00", "15:30", "16:00", "16:30", "17:00"];

    for (let i = 0; i < days.length; i++) {
        let b = document.createElement('div');
        b.className = 'label-dia';
        if (i == 0) {
            b.textContent =  (today.getDate() + i) + "/" + (today.getMonth() + 1); 
            b.id = 'd1';
        }
        else {
            b.textContent =  (today.getDate() + i) + "/" + (today.getMonth() + 1); 
        }
    
        days[i].appendChild(b);

        for (let j = 0; j < hours.length; j++) {
            let a = document.createElement('div');
            a.className = 'single-hour verde';
            a.textContent = hours[j]
            a.id = 'h-' + j + '-' + i;
            a.addEventListener('click', () => change(`h-${j}-${i}`));
            days[i].appendChild(a)    
        }
    }
}

function change(id) {
    let element = document.getElementById(id);
    if (last == id) {
        last = "";
        hour_select = "";
        element.setAttribute("class", "single-hour verde");
    }
    else {
        
        element.getAttribute("class") == "single-hour verde2" ? element.setAttribute("class", "single-hour verde"): element.setAttribute("class", "single-hour verde2");    
        if (last != "") {
            document.getElementById(last).className = "single-hour verde"
        }
        hour_select = element.textContent + " " + element.parentElement.getElementsByClassName('label-dia')[0].textContent;
        last = id;
    }
}

function getInputs() {
    let a = [];

    document.querySelectorAll('.inp').forEach(element => {
        if (element.checked){
            a.push(element.value)
        }
    });

    let hd = hour_select.split(" ");
    if (hd[0] == ""){
        hd[0] = undefined
    }

    let infos = {
        "profissional":a[0],
        "procedimento":a[1],
        "hora": hd[0],
        "dia": hd[1],
        "type":"add_consulta"
    }
    console.log(infos)
    let hh = false;
    let contentData = ["profissional", "procedimento", "hora", "dia"];

    for (let i  = 0; i < contentData.length; i++){
       if (infos[contentData[i]] == undefined) {
        hh = true;
        break;
       }
    }

    if (hh) {
        alert("Selecione todos os campos");
    }    
    else {
        fetch('http://localhost:5500/upload', {
            method: "POST",
            body: JSON.stringify(infos),
            headers: {
                'content-type': "application/json; charset=UTF-8",
            }
        })
    }
}


createHourAtDays()
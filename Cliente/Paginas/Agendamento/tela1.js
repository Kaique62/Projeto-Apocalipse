var last = null;
var hour_select;

function kattlen() {
    for (let i = 0; i < 6; i++){
        if (i < 3)
            document.getElementById("option-" + (i + 1)).disabled = false;
        else{
            document.getElementById("option-" + (i + 1)).disabled = true;
            document.getElementById("option-" + (i + 1)).checked = false;
        }
    }

    let obj = {"name":'kaique', "gender":'E', "convenience_state":'um', "convenience_list": 'bobao'};
    fetch('http://172.16.30.52/', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'content-type': "application/json; charset=UTF-8",
        }
    });
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
            b.textContent =  (today.getDate() + i) + "/" + (today.getMonth() + 1) + " (Hoje)"; 
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
    element.getAttribute("class") == "single-hour verde2" ? element.setAttribute("class", "single-hour verde"): element.setAttribute("class", "single-hour verde2");

    if (last != null) {
        document.getElementById(last).className = "single-hour verde"
    }
    hour_select = element.textContent + '|' + element.parentElement.getElementsByClassName('label-dia')[0].textContent;
    console.log(hour_select);
    last = id;
}
createHourAtDays()
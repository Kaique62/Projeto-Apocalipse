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
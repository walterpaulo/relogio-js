
function clock() {
    var dataAtual = new Date();
    
    document.getElementById("horas").innerHTML = doisNumeros(dataAtual.getHours());
    document.getElementById("minutos").innerHTML = doisNumeros(dataAtual.getMinutes());
    document.getElementById("segundos").innerHTML = doisNumeros(dataAtual.getSeconds());
}

function doisNumeros(numero){
    if(numero < 10){
        return("0"+numero)
    }else{
        return(numero)
    }
}

var interval = setInterval(clock, 1000);

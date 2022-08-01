var minutosHT = document.getElementById('minutos');
let segundosHT = document.getElementById('segundos');
var buttonHT = document.getElementById('button');

var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;

console.log(pomodoro)

time();

minutosHT.textContent = pomodoro
segundosHT.textContent = segun + '0'

function time(){
        var minutos = 25
        var segundos
        
        for(i=0; minutosHT != 0; i++){
                minutos = Math.floor(diferença / 1000 /60) % 60 // minutos
                segundos = Math.floor(diferença / 1000) % 60
        }


}


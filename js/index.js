const minutos = document.getElementById('#minutos');
const segundos = document.getElementById('#segundos')
const button = document.querySelector('#button')

var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;

console.log(segun)


function contagem_regressiva(){

        minutos.textContent= pomodoro;
        segundos.textContent = segun ;
        console.log(minutos);


        //for(var i =0; 0<=25; i++){}


}
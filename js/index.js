const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const button = document.querySelector('#button');

var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;

minutos.textContent= pomodoro;
segundos.textContent = segun ;

const contagem = () =>{

        minutos.textContent= pomodoro;
        segundos.textContent = segun ;
        
        const minu = Math.floor(pomodoro / 1000/60) %60; 
        const segun = Math.floor(segun / 1000/60) %60;

}
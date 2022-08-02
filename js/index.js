var time = document.getElementById('time');
var buttonHT = document.getElementById('button');

var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;
var min = 0
var sec = 0
var interval

time.textContent = pomodoro + ':00'

function inicio(){
        console.log('Inicio')
        interval = setInterval(tempo_estudo,10)
}

function intervalo_curto(){
        console.log('intervalo curto')
        interval = setInterval(pausa_curta,10)
}

function intervalo_grande(){
        console.log('Intervalo Grande')
        interval = setInterval(pausa_longa,10)
}

function tempo_estudo(){
        sec ++
        if(sec== 60){
                min++
                sec=0
                if( min == 10){
                        window.alert('fim!!')
                        interval = setInterval(intervalo_curto,10)
                }
        }
                
        
        document.getElementById('time').innerText = min + ':' + sec
}

function pausa_curta() {

        sec ++
        if(sec == 60){
                console.log('entrouuuuuuuuuuuu')
                min++
                console.log(min)
                sec=0
                if( min == 5){
                        window.alert('terminou a folga!!')
                        inicio();
                }
        }
                
        
        document.getElementById('time').innerText = min + ':' + sec
}

function pausa_longa() {

        sec ++
        if(sec == 60){
                console.log('pausa bem longaaaaaaaaa')
                min++
                console.log(min)
                sec=0
                if( min == 15){
                        window.alert('terminou a folga!!')
                        inicio();
                }
        }
                
        
        document.getElementById('time').innerText = min + ':' + sec
}
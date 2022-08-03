var time = document.getElementById('time');
var buttonHT = document.getElementById('button');

var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;
var min = 0
var sec = 0
var interval
var pomo = 0

time.textContent = pomodoro + ':00'

function inicio(){
        usuario(1);
}

function intervalo_curto(){
        usuario(2);
}

function intervalo_grande(){
        usuario(3);
}

function usuario(number){
        if(number == 1){
                interval = setInterval(tempo_estudo,10)
                console.log('1')

        }else if (number == 2){
                interval = setInterval(pausa_curta,10)
                console.log('2')
        }else if(number == 3) {
                interval = setInterval(pausa_longa,10)
                console.log('3')
        }else{
                number=0;
                window.alert('parabéns você esta no seu ' + pomo + ' pomodoro!!')
                zero();
        }
}

function tempo_estudo(){
        console.log('tempo de estudo')
        sec++
                
        if(sec== 60){
                min++
                sec=0
                if( min == 10){
                        window.alert('fim!!')
                        usuario(0);
                        pomodoro = 2;
                }
        }
                        
                
                document.getElementById('time').innerText = min + ':' + sec
}

function pausa_curta(){
        console.log('pausa curta')
        sec++
                
        if(sec== 60){
                min++
                sec=0
                if( min == 5){
                        window.alert('fim!!')
                        usuario(0);
                        
                }
        }
                        
                
                document.getElementById('time').innerText = min + ':' + sec
}

function pausa_longa(){
        console.log('pausa longa')
        sec++
                
        if(sec== 60){
                min++
                sec=0
                if( min == 15){
                        window.alert('fim!!')
                        usuario(0);
                        
                }
        }
                        
                
                document.getElementById('time').innerText = min + ':' + sec
}

function zero(){
        clearInterval(interval)
        console.log('zero')
        console.log('pomodoro: ',pomo)
        sec = 0
        min = 0
        
        if(pomo == 1 || pomo == 3 || pomo == 5){
                inicio();
                pomo ++
        }else if( pomo == 0 || pomo == 2 || pomo == 4){
                intervalo_curto();
                pomo ++
        }else if (pomo == 6){
                intervalo_grande();
                pomo = 1;
        }

}


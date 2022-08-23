var time = document.getElementById('time');
var buttom = document.getElementById('button');
var container = document.querySelector('.container')
var body = document.querySelector('body')
var foco = document.querySelector('.quant_pom');
var prog = document.getElementById('tempo')
var tarefa = document.querySelector('.tarefas')
var progresso_pessoa = document.querySelector('.progresso')

var text = 'olá'
var pomodoro = 25;
var pausa = 5;
var pausa_grande = 15;
var segun = 0;
var min = 0
var sec = 0
var interval
var pomo = 1
var cont_pausas = 1
var bool = false


time.textContent = pomodoro + ':00'

function inicio(){   
        
        container.style.backgroundColor = "#f26868";
        body.style.backgroundColor = "#d95550";
        foco.style.backgroundColor =  "#f26868";
        tarefa.style.backgroundColor =  "#f26868";
        progresso_pessoa.style.backgroundColor = "#f26868";
        time.textContent = pomodoro + ':00'
        buttom.innerHTML = "PARA"

        usuario(1);
        progresso();
        bool= true

        
}

function intervalo_curto(){
        clearInterval(interval)
        sec = 0
        min = 0

        container.style.backgroundColor = "#768de6"
        body.style.backgroundColor = "#556ed3";
        foco.style.backgroundColor = "#768de6"
        tarefa.style.backgroundColor =  "#768de6";
        progresso_pessoa.style.backgroundColor = "#768de6";
        buttom.innerHTML = "PARA"
        time.textContent = '05:00'

        usuario(2);
        progresso();
}

function intervalo_grande(){
        container.style.backgroundColor = "#5e9ca0";
        body.style.backgroundColor =  "#4c9195";
        foco.style.backgroundColor = "#5e9ca0";
        tarefa.style.backgroundColor =  "#5e9ca0";
        progresso_pessoa.style.backgroundColor = "#5e9ca0";
        buttom.innerHTML = "PARA"
        time.textContent = '15:00'

        progresso();
        usuario(3);
}



function usuario(number){
        if(number == 1){
                
                interval = setInterval(tempo_estudo,1000)
                console.log('1')
                text = 'bons estudos'
        }else if (number == 2){
                interval = setInterval(pausa_curta,1000)
                console.log('2')
                text = 'bora descansa'
        }else if(number == 3) {
                
                interval = setInterval(pausa_longa,1000)
                console.log('3')
                text = 'hora de uma boa pausa'
        }else{
                number=0;
                pomo++
                total_foco.innerText = '#' + pomo
                buttom.innerText = "Começa"
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
                if( min == 25){
                        window.alert('fim!!')
                        usuario(0);
                        
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

        console.log('contador de pausas: ', cont_pausas)

        if(cont_pausas  %2 == 0 && cont_pausas  != 5){
                inicio();
                cont_pausas++

        }else if( cont_pausas  %2 != 0 && cont_pausas  != 5){
                intervalo_curto();
                cont_pausas++

        }else if (cont_pausas == 5 ){
                intervalo_grande();
                cont_pausas = 0
        }

}

function progresso(){
        var divNova = document.createElement('div');
        var conteudo = document.createElement('p');
        var divPro = document.getElementById('tempo');

        const horario = new Date().toLocaleTimeString(); 

        conteudo.textContent = pomo + ' - '+ horario + '  ' + text;

        divNova.appendChild(conteudo);
        divPro.appendChild(divNova);
        
}


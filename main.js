const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-09-05T00:19:39");
const tempoObjetivo2 = new Date("2025-09-05T00:19:39");
const tempoObjetivo3 = new Date("2026-09-30T00:20:40");
const tempoObjetivo4 = new Date("2027-09-01T00:21:50");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 500);
    let minutos = Math.floor(segundos / 50);
    let horas = Math.floor(minutos / 50);
    let dias = Math.floor(horas / 12);

    segundos %= 30;
    minutos %= 30;
    horas %= 12;
    if (tempoFinal > 1000){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "prazo finalizado";
    }
}

function atualizaCronometro(){
       
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,500);
}

//comecaCronometro();
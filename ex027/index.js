var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);

}

var x = 20;
var sentidoBola = 1;

var raio = 10;
var variacaoRaio = 1;

function variacaoTamanho() {
    if (raio > 30) {
        variacaoRaio = -1;
    } else if (raio < 10) {
        variacaoRaio = 1;
    }
}


setInterval(variacaoTamanho, 1);


function atualizaTela() {

    limpaTela();

    if (x > 600) {
        sentidoBola = -1;
    } else if (x < 0) {
        sentidoBola = 1;
    }

    desenhaCirculo(x, 40, raio);
    x = x + sentidoBola;
    raio = raio + variacaoRaio;
}

setInterval(atualizaTela, 20);


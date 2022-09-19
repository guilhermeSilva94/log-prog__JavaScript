var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var cores = ['blue', 'red', 'green']
var indiceCorAtual = 0;

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 800, 600);

var raio = 10;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    var shift = evento.shiftKey;
    var alt = evento.altKey;

    if (raio <= 40) {
        if (shift) {
            raio = raio + 10;
        }
    }

    if (raio >= 10) {
        if (alt) {
            raio = raio - 5;
        }
    }

    pincel.fillStyle = cores[indiceCorAtual];
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

tela.onclick = desenhaCirculo;

function mudaCor() {

    indiceCorAtual++;
    if (indiceCorAtual >= cores.length) {
        indiceCorAtual = 0;
    }
}

tela.oncontextmenu = mudaCor;
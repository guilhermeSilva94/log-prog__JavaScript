
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var desenha = false;

var cores = document.querySelector('input');

function desenhaCirculo(evento) {

    if (desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = cores.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
}

tela.onmousemove = desenhaCirculo;

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;



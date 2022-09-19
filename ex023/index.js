var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

desenhaCirculo(300, 200, 40, 'red');
desenhaCirculo(300, 120, 40, 'yellow');
desenhaCirculo(300, 280, 40, 'blue');
desenhaCirculo(380, 200, 40, 'black');
desenhaCirculo(220, 200, 40, 'orange');
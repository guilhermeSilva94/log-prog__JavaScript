function desenhaQuadrado(corQuadrado, posicaoX, posicaoY) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = corQuadrado;
    pincel.strokeStyle = 'black';

    pincel.fillRect(posicaoX, posicaoY, 50, 50);
    pincel.strokeRect(posicaoX, posicaoY, 50, 50);
}

for (i = 0; i < 600; i = i + 50) {
    desenhaQuadrado('green', i, 0);
    desenhaQuadrado('red', i, 50);
    desenhaQuadrado('blue', i, 100);
}
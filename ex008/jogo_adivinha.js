function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let numeroPensado = Math.round(Math.random() * 10);
let chute = parseInt(prompt('Digite seu chute!'));

if (chute == numeroPensado) {
    mostra('Você acertou!!!');
}else {
    mostra('Você errou, o número pensado foi ' + numeroPensado);
}
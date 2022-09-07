//Imprima em ordem decrescente todos os números entre 20 e 0, incluindo os limites! No final, escreva a palavra "FIM".

function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let inicio = 20;

while (inicio > -1) {
    mostra(inicio)
    inicio = inicio - 1;
}

mostra('FIM')
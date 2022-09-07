//Imprima todos os números entre 30 e 40 (inclusive 30 e 40), porém os números 33 e 37 não devem ser impressos! No final escreva a palavra "FIM".

function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let inicio = 30;

while (inicio <= 40) {
    if (inicio != 37 && inicio != 33) {
        mostra(inicio);
        inicio = inicio + 1;
    } else {
        inicio = inicio + 1;
    }
}

mostra('FIM')
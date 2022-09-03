function pulaLinha() {
    document.write('<br>');
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let anoInicio = 1500;
let anoAtual = 2022;
let intervalo = 28;

mostra(Math.round((anoAtual-anoInicio)/intervalo));
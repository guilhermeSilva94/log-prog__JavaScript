function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let limite = parseInt(prompt('Entre com a data limite'));
let anoCopa = 1930;

while (anoCopa <= limite) {
    mostra('Teve copa em ' + anoCopa);
    anoCopa = anoCopa +4;
}

mostra('FIM');

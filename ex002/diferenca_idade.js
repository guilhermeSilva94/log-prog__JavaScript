function pulaLinha() {
    document.write('<br>');
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let minhaIdade = 27;
let idadeIgor = 24;

mostra('Nossa diferença de idade é de ' + (minhaIdade - idadeIgor) + ' anos.');
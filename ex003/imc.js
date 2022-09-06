function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    return Math.round(peso / (altura * altura));
}

let nome = prompt('Qual é o seu nome?')
let alturaInformado = prompt(nome + ' qual é a sua altura?');
let pesoInformado = prompt(nome + ' qual é o seu peso?');

let imc = calculaImc(pesoInformado, alturaInformado);

document.write(nome + ', o seu IMC é ' + imc);
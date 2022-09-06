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

mostra(nome + ', o seu IMC é ' + imc);

if (imc < 18.5) {
    mostra('Você está abaixo do recomendado');

} else if (imc > 35) {
    mostra('Você está acima do recomendado');
    
} else if (imc >= 18.5 && imc <= 35) {
    mostra('Seu IMC está excelente!');
}
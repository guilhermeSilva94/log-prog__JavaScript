function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));


if (idade < 18 ) {
    mostra('Você não pode dirigir, porque não tem idade.');
} else {
    var temCarteira = prompt("Tem carteira de motorista? Responda S ou N");
      if (temCarteira == 'S') {
        mostra('Você pode dirigir!!!');
    } else {
        mostra('Você não pode dirigir, porque não tem carteira de motorista');
    }
}

function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

let ano = 2016;

mostra("Flávio tem  " + (ano - 1977) + " anos");

mostra("Joaquim tem " + (ano - 1996) + " anos");

ano = 2017;

mostra("Barney tem " + (ano - 1976) + " anos");
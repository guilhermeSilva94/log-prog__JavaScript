const loginCadastrado = "Gui";
const senhaCadastrada = "Gui123#";

let tentativas = 1;

while(tentativas <= 3) {
    let loginInformado = prompt("Informe seu login");
    let senhaInformada = prompt("Informe sua senha");
    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
        alert("Bem-vindo ao sistema " + loginInformado);
        tentativas = 10;
    } else {
        alert("Login inválido.");
        tentativas = tentativas + 1;
    }
}
function sorteia() {
    return Math.round(Math.random() * 10) // Um número aleatório
}

function sorteiaNumeros(quantidade) {
    var segredos = []; //Array que vai ser criada
    
    var numero = 1;
    
    while(numero <= quantidade) {
        var numeroAleatorio = sorteia();
        var achou = false;
        
        if(numeroAleatorio !== 0) {
            for(var i = 0; i < segredos.length; i++) {
                if(segredos[i] == numeroAleatorio) {
                achou = true;
                break;
                }
            }

            if(achou == false) {
                segredos.push(numeroAleatorio);
                numero++;
            }
        
        }
    }
        
    return segredos; // Retorna array para váriavel
}

var segredos = sorteiaNumeros(3);

console.log(segredos);

var input = document.querySelector('input');
input.focus();

var button = document.querySelector('button');
button.onclick = verifica;

var achou = false;

function verifica() {
    for(var posicao = 0; posicao < segredos.length; posicao++) {

        if(input.value == segredos[posicao]) {
            alert('Você ACERTOU!');
            achou = true;
            break;
            }
        } 

        if (achou == false) {
            alert('Você ERROU!');
        }

        input.value = '';
        input.focus();
    }


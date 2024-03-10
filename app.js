alert('Boas vindas ao jogo do número secreto!');

let numeroMaximo = 500;
let secret_number = parseInt(Math.random() * numeroMaximo +1);
let chute;
let tentativas = 1;

//Comparação dos valores
while (chute != secret_number){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if (chute > numeroMaximo) {
        alert('Insira um número menor!')
    } else if (chute == secret_number) {
        break;
        
    } else {
        if(secret_number > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavra_tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertoo o número secreto ${secret_number} com ${tentativas} ${palavra_tentativa}`)
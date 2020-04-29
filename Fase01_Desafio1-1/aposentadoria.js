//Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = 'Silvana';
const sexo = 'F';
const idade = 60;
const contribuicao = 28;


if (sexo == 'F') {
    if (contribuicao >= 30 && contribuicao + idade >= 85) {
        console.log (`${nome}, você está APTA para aposentar!`)
    } else {
        console.log(`${nome}, você NÃO está APTA para aposentar!`)
    }
} else {
    if (contribuicao >= 35 && contribuicao + idade >= 95) {
        console.log (`${nome}, você está APTO para aposentar!`)
    } else {
        console.log (`${nome}, você NÃO está APTO para aposentar!`)
    }
}
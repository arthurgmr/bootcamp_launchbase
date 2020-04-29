//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Arthur';
const peso = 80;
const altura = 1.78;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Seu IMC é ${imc}. Você está acima do peso.`)
} else {
    console.log(`Seu IMC é ${imc}. Você não está acima do peso.`)
}
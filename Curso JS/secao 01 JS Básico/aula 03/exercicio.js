/*
Luis Osasco Pereira Trindade tem 80 anos, pesa 87 kg
tem 1.8 de altura e seu  IMC é de 25.923923923
Luiz Osasco nasceu em 1980
*/

const nome = "Luiz Osasco"
const sobrenome = "Pereira"
const idade = 30
const peso = 84
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);

// console.log(imc);

anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', altura, 'de altura e seu IMC é de ', imc);
console.log(nome, 'nasceu em', anoNascimento);
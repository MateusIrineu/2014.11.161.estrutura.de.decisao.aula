// Verificação de Número Par ou Ímpar
//Você deve criar um programa que ajude um professor a verificar se os números de um
//conjunto de alunos são pares ou ímpares. O professor fornecerá um número.

const prompt = require("prompt-sync")()

const NUMERO = parseInt(prompt(`Insira um número: `))

const PAR = NUMERO % 2 == 0

if (PAR) {
    console.log(`O número é par`)
} else {
    console.log("O número é impar")
}
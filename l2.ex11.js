// Um banco deseja classificar o risco de um empréstimo; escreva um código que, ao receber a
// pontuação de crédito, imprima "Baixo" para acima de 700, "Moderado" para 500 a 700, e "Alto"
// para abaixo de 500.

const prompt = require("prompt-sync")()

const CREDITO = parseFloat(prompt("Insira a sua pontuação de crédito: "))

if (CREDITO > 700) {
    console.log("Baixo.")
} else if (CREDITO >= 500 && CREDITO <= 700) {
    console.log("Moderado.")
} else {
    console.log("Alto.")
}
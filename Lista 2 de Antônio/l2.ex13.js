// Um meteorologista deseja classificar o clima baseado em um índice, variando de 0 a 100.
// Escreva um código que, ao receber esse índice, imprima a classificação correspondente. As
// faixas de clima são definidas da seguinte forma:
// Seco: Índice menor que 30
// Úmido: Índice de 30 a 69
// Chuvoso: Índice de 70 a 100

const prompt = require("prompt-sync")()

const INDICE = parseFloat(prompt("Insira o índice para receber a classificação: "))

if (INDICE >= 0 && INDICE < 30) {
    console.log("Seco.")
} else if (INDICE >= 30 && INDICE <= 69) {
    console.log("Úmido.")
} else if (INDICE >= 70 && INDICE <= 100) {
    console.log("Chuvoso.")
} else {
    console.log("Índice irregular. Por favor, insira um índice de 1 a 100.")
}
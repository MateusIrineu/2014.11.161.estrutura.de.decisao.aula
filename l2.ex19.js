// Um ambientalista deseja classificar o impacto de diferentes produtos; escreva um código que,
// ao receber um índice de 1 a 5, imprima "Baixo", "Moderado" ou "Alto".
// ● Baixo: Menor e igual a 2
// ● Moderado: Menor e igual a 4
// ● Alto: Maior que 5

const prompt = require("prompt-sync")()

const INDICE = parseInt(prompt("Insira um índice de 1 a 5: "))

if (INDICE <= 2) {
    console.log("Baixo.")
} else if (INDICE <= 4) {
    console.log("Moderado.")
} else {
    console.log("Alto.")
}
// Classificação de Risco de Saúde
// Um profissional de saúde deseja classificar os pacientes com base no IMC (Índice de
// Massa Corporal). Escreva um código que imprima a classificação do IMC.

const prompt = require("prompt-sync")()

const IMC = parseFloat(prompt("Insira o IMC: "))

if (IMC < 18.5) {
    console.log("IMC baixo peso")
} else if (IMC >= 18.5 && IMC < 24.9) {
    console.log("IMC peso adequado")
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("IMC sobrepeso")
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log("IMC obesidade grau I")
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log("IMC obesidade grau II")
} else {
    console.log(" obesidade grau III")
}
// Um agente de trânsito deseja classificar a velocidade de um carro; crie um código que, ao
// receber a velocidade, imprima "Dentro do limite" se a velocidade for até 80 km/h, e "Acima do
// limite" se for maior que 80 km/h.

const prompt = require("prompt-sync")()

const VELOCIDADE = parseFloat(prompt("Insira a velocidade do carro em km/h: "))

if (VELOCIDADE  <= 80) {
    console.log("Dentro do limite.")
} else {
    console.log("Acima do limite.")
}
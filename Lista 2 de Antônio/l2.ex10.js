// Um jardineiro deseja classificar o crescimento das plantas; crie um código que, ao receber a
// altura da planta em centímetros, imprima "Brotando" para até 10 cm, "Crescendo" para 11 a 30
// cm, e "Adulto" para acima de 30 cm.

const prompt = require("prompt-sync")()

const ALTURA = parseFloat(prompt("Insira a altura da planta em centímetros: "))

if (ALTURA <= 10) { 
    console.log("Brotando.")
} else if (ALTURA >= 11 && ALTURA <= 30) {
    console.log("Crescendo.")
} else {
    console.log("Adulto.")
}
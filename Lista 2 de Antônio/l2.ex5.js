// Um treinador deseja avaliar o desempenho dos corredores com base na distância percorrida;
// escreva um código que imprima "Curta" para até 5 km, "Média" para de 6 a 10 km, e "Longa"
// para acima de 10 km.

const prompt = require("prompt-sync")()

const DISTANCIA = parseInt(prompt("Insira a distância percorrida em km: "))

if (DISTANCIA > 0 && DISTANCIA <= 5) {
    console.log("Curta")
} else if (DISTANCIA >= 6 && DISTANCIA <= 10) {
    console.log("Média")
} else {
    console.log("Longa")
}
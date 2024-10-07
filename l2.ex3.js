// Um vendedor deseja classificar roupas com base nas medidas; crie um código que imprima
// "Pequeno" para tamanho P, "Médio" para M, e "Grande" para G.

const prompt = require("prompt-sync")()

const TAMANHO = prompt("Insira o tamanho em maiúsculo: ")

if (TAMANHO === "P") {
    console.log("Pequeno")
} else if (TAMANHO === "M") { 
    console.log("Médio")
} else if (TAMANHO === "G") {
    console.log("Grande")
} else {
    console.log("Tamanho indisponível. Tamanhos disponíveis: P, M e G.")
}
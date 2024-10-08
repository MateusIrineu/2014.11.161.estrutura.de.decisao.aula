// Um pesquisador deseja classificar as reações dos participantes; escreva um código que, ao
// receber uma nota de 1 a 5, imprima "Muito insatisfeito", "Insatisfeito", "Neutro", "Satisfeito" ou
// "Muito satisfeito". 

const prompt = require("prompt-sync")()

const NOTA = parseInt(prompt("Insira a nota do participante de 1 a 5: "))

if (NOTA == 1) {
    console.log("Muito insatisfeito.")
} else if (NOTA == 2) {
    console.log("Insatisfeito.")
} else if (NOTA == 3) {
    console.log("Neutro.")
} else if (NOTA == 4) {
    console.log("Satisfeito.")
} else if (NOTA == 5) {
    console.log("Muito satisfeito.")
} else {
    console.log("Nota inválida. Por favor, insira uma nota de 1 a 5.")
}
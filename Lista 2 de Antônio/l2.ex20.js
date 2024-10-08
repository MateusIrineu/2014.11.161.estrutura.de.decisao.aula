// Um desenvolvedor de jogos deseja classificar os jogadores com base em suas habilidades; crie
// um código que, ao receber uma pontuação de 1 a 100, imprima "Novato", "Intermediário" ou
// "Experiente".
// ● Novato: Menor e igual a 33
// ● Intermediário: Menor ou igual a 66
// ● Experiente: Maior que 67

const prompt = require("prompt-sync")()

const PONTUACAO = parseFloat(prompt("Insira a pontuação de 1 a 100: "))

if (PONTUACAO <= 33) {
    console.log("Novato.")
} else if (PONTUACAO <= 66) {
    console.log("Intermediário.")
} else if (PONTUACAO <= 100) {
    console.log("Experiente.")
} else {
    console.log("Pontuação irregular. Insira uma pontuação de 1 a 100.")
}
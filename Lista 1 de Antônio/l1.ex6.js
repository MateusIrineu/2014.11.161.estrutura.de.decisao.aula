// Avaliação de Desempenho em um Jogo
//Um desenvolvedor de jogos precisa classificar o desempenho dos jogadores com base
//na pontuação que obtiveram. Escreva um código que imprima a classificação do
//jogador.

const prompt = require("prompt-sync")()

const PONTUACAO = parseFloat(prompt("Insira a pontuação: "))

if (PONTUACAO >= 10) {
    console.log("Excelente")
} else if (PONTUACAO >= 6) {
    console.log("Está na média")
} else {
    console.log("Melhore")
}
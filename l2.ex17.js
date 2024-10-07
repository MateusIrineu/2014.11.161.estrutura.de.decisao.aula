// Um organizador de eventos deseja classificar os participantes com base em suas idades.
// Escreva um código que, ao receber a idade, imprima a classificação correspondente. As faixas
// etárias são definidas da seguinte forma:
// ● Criança: Idade menor que 18 anos
// ● Adulto: Idade entre 18 e 59 anos (incluindo 18 anos e excluindo 60 anos)
// ● Idoso: Idade a partir de 60 anos

const prompt = require("prompt-sync")()

const IDADE = parseInt(prompt("Insira a idade para saber a faixa etária: "))

if (IDADE < 18) {
    console.log("Criança.")
} else if (IDADE >= 18 && IDADE <= 59) {
    console.log("Adulto.")
} else {
    console.log("Idoso.")
}
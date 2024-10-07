//Verificação de Faixa Salarial
//Um consultor de recursos humanos precisa classificar os salários de candidatos em
//uma empresa. Escreva um código que, ao receber o salário, imprima "Baixa", "Média"
//ou "Alta".

const prompt = require("prompt-sync")()

const SALARIO = parseFloat(prompt("Insira o valor do salário: "))

if (SALARIO >= 10000) {
    console.log("Alta")
} else if (SALARIO >= 5000) {
    console.log("Média")
} else {
    console.log("Baixa")
}
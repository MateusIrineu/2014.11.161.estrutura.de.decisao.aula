// Classificação de Idade
//Um educador quer classificar seus alunos com base na idade para organizar atividades.
//Escreva um código que receba a idade de um aluno e imprima "Criança", "Adolescente",
//"Adulto" ou "Idoso".

const prompt = require("prompt-sync")()

const IDADE = parseInt(prompt("Insira a idade do aluno: "))

if (IDADE <= 13) {
    console.log("o aluno é uma criança")
} else if (IDADE <= 17) {
    console.log("o aluno é um adolescente")
} else if (IDADE <= 79) {
    console.log("o aluno é um adulto")
} else {
    console.log("o aluno é um idoso")
}
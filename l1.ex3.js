//Classificação de Notas
//Em uma escola, os professores precisam classificar as notas dos alunos. Crie um
//código que receba a nota de um aluno e imprima "Conceito A", "Conceito B", "Conceito
//C" ou "Reprovado".

const prompt = require("prompt-sync")()

const NOTA = parseFloat(prompt("Insira a nota do aluno: "))

if (NOTA >= 9) {
    console.log("Conceito A")
} else if (NOTA  >= 7) {
    console.log("Conceito B")
} else if (NOTA >= 4) {
    console.log("Conceito C")
} else {
    console.log("Conceito D")
}
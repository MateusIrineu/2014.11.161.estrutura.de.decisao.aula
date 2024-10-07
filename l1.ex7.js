// Verificação de Aprovado ou Reprovado
// Um professor deseja saber se seus alunos foram aprovados ou reprovados com base
// na média final. Crie um código que, ao receber a média, imprima "Aprovado" ou
// "Reprovado".

const prompt = require("prompt-sync")()

const MEDIA = parseFloat(prompt("Insira a média: "))

if (MEDIA >= 5) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
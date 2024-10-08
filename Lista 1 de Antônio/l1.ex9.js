// Verificação de Resultados de Um Concurso
// Um organizador de concursos precisa avaliar os candidatos com base na nota que
// obtiveram. Crie um código que, ao receber a nota do concurso, imprima a situação do
// candidato.

const prompt = require("prompt-sync")()

const NOTA = parseFloat(prompt("Insira a nota do candidato: "))

if (NOTA >= 90) {
    console.log("Candidato APROVADO")
} else {
    console.log("Candidato REPVODADO")
}
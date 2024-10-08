// Um professor quer classificar as notas de um teste; escreva um código que imprima "Muito
// bom" para notas acima de 80, "Bom" para notas entre 70 e 80, "Satisfatório" para notas entre
// 50 e 69, e "Insatisfatório" para notas abaixo de 50.

const prompt = require("prompt-sync")()

const NOTA = parseInt(prompt("Insira a nota do aluno: "))

if (NOTA > 80) {
    console.log("Muito Bom")
} else if (NOTA >= 70 && NOTA <= 80) {
    console.log("Bom")
} else if (NOTA >= 50 && NOTA <= 69) {
    console.log("Sastifatório")
} else {
    console.log("Insastifatório")
}
// 

const prompt = require("prompt-sync")()

const NOTA = parseFloat(prompt("Insira sua nota: "))

if (NOTA >= 7) {
    console.log("O aluno está aprovado por média")
} else if (NOTA < 3) {
    console.log("O aluno está em reprovado")
} else {
    console.log("O aluno está em recuperação")
}

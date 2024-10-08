/// Crie um programa que receba uma nota de 0 a 10 e exiba uma mensagem de acordo com a 
/// nota:
/// o 0 a 4: "Reprovado"
/// o 5 a 6: "Recuperação"
/// o 7 a 10: "Aprovado"
/// Use a estrutura switch para lidar com os diferentes casos.

const prompt = require("prompt-sync")()

const nota = prompt(`Digite a nota de 0 a 10: `)

switch(nota) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
        console.log(`Reprovado.`)
        break
    
    case '5':
    case '6':
        console.log("Recuperação.")
        break

    case '7':
    case '8':
    case '9':
    case '10':
        console.log("Aprovado.")
        break
}
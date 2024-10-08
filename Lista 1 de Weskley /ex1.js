/// Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana 
/// correspondente (por exemplo, 1 para "Domingo", 2 para "Segunda-feira", etc.). Use a 
/// estrutura switch para implementar a solução.

const prompt = require("prompt-sync")()

const numero = prompt(`Digite um número de 1 a 7 para saber o dia da semana equivalente: `)

switch(numero) {
    case '1':
        console.log(`Domingo`)
        break
    case '2':
        console.log(`Segunda-Feira`)
        break
    case '3':
        console.log(`Terça-Feira`)
        break
    case '4':
        console.log(`Quarta-Feira`)
        break
    case '5':
        console.log(`Quinta-Feira`)
        break
    case '6':
        console.log(`Sexta-feira`)
        break
    case '7':
        console.log(`Sábado`)
        break
    default:
        console.log(`ERRO!!! digite um número de 1 a 7`)
}
/// Desenvolva um programa que receba o número de um mês (de 1 a 12) e exiba quantos dias 
/// esse mês possui. Considere fevereiro com 28 dias. Use a estrutura switch para implementar 
/// a lógica

const prompt = require("prompt-sync")()

const valor = prompt("Digite um número de 1 a 12 para descobrir o mês: ")

switch(valor) {
    case '1':
        console.log(`Janeiro: 31 dias.`)
        break

    case '2':
        console.log(`Fevereiro: 28 dias.`)
        break

    case '3':
        console.log(`Março: 31 dias.`)
        break

    case '4':
        console.log(`Abril: 30 dias.`)
        break

    case '5':
        console.log(`Maio: 31 dias.`)
        break

    case '6':
        console.log(`Junho: 30 dias.`)
        break

    case '7':
        console.log(`Julho: 31 dias.`)
        break

    case '8':
        console.log(`Agosto: 31 dias.`)
        break

    case '9':
        console.log(`Setembro: 30 dias.`)
        break

    case '10':
        console.log(`Outubro: 31 dias.`)
        break

    case '11':
        console.log(`Novembro: 30 dias.`)
        break

    case '12':
        console.log(`Dezembro: 31 dias.`)
}
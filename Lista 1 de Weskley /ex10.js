/// Escreva um programa que receba o número de um dia da semana (1 a 7) e exiba se é um
/// "Dia Útil" ou "Fim de Semana". Utilize switch para diferenciar entre os dias úteis e os fins
/// de semana.

const prompt = require("prompt-sync")()

const diaSemana = prompt(`Escreva um número (1 a 7) para descobrir se é um dia útil ou fim de semana: `)

switch(diaSemana) {
    case '1':
    case '7':
        console.log(`Fim de Semana.`)
        break

    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
        console.log(`Dia Útil.`)
        break
}
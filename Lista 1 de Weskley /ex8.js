/// Faça um programa que receba um número de 1 a 4 representando uma estação do ano (1
/// para "Primevera", 2 para "Verão", 3 para "Outono", 4 para "Inverno") e exiba uma
/// mensagem com a estação correspondente. Use o switch para definir cada caso.

const prompt = require("prompt-sync")()

const estacao = prompt(`Escolha um número de 1 a 4 para corresponder a uma estação do ano: `)

switch(estacao) {
    case '1':
        console.log(`Primavera.`)
        break

    case '2':
        console.log(`Verão.`)
        break

    case '3':
        console.log(`Outono.`)
        break

    case '4':
        console.log(`Inverno`)
        break
}
/// Escreva um programa que receba uma letra representando uma categoria de habilitação (A, 
/// B, C, D, ou E) e exiba uma mensagem informando para quais tipos de veículos essa 
/// categoria permite dirigir. Utilize switch para cada caso.

const prompt = require("prompt-sync")()

const letra = prompt(`Digita uma letra(A, B, C, D ou E) para saber o tipo de veículo: `)

switch(letra) {
    case 'A':
        console.log(`Moto.`)
        break

    case 'B':
        console.log(`Carro.`)
        break
    
    case 'C':
        console.log(`Caminhão.`)
        break
    
    case 'D':
        console.log(`Ônibus.`)
        break
}
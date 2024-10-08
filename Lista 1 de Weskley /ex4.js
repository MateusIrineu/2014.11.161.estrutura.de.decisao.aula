// Implemente um programa que receba uma string com o nome de uma fruta ("maçã", 
// "banana", "laranja", etc.) e exiba o preço da fruta com base em um conjunto de preços 
// predefinidos usando a estrutura switch.

const prompt = require("prompt-sync")()

const fruta = prompt("Digite o nome de uma das seguintes frutas para saber o preço delas( maçã, banana, laranja): ")

switch(fruta) {
    case 'maçã':
        console.log(`10 reais.`)
        break

    case 'banana':
        console.log(`15 reais.`)
        break

    case 'laranja':
        console.log(`20 reais`)
}
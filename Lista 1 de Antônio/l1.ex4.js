//Classificação de Temperatura
//Você é um meteorologista e deve informar a população sobre as condições climáticas.
//Escreva um código que, ao receber a temperatura em graus Celsius, imprima "Frio",
//"Agradável" ou "Quente".

const prompt = require("prompt-sync")()

const TEMPERATURA = parseFloat(prompt("Insira a temperatura: "))

if (TEMPERATURA >= 30){
    console.log("Quente")
} else if (TEMPERATURA >= 20) {
    console.log("Agradável")
} else {
    console.log("frio")
}
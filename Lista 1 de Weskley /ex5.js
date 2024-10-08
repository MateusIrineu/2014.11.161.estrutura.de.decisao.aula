/// Crie um programa que receba um valor numérico correspondente a uma operação 
/// aritmética (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão) e, com base 
/// nesse valor, execute a operação entre dois números fornecidos pelo usuário.

const prompt = require("prompt-sync")()

const operacaoAritmetica = prompt("Digite valor de 1 a 4 para corresponder a operação aritimética desejada: ")

switch(operacaoAritmetica) {
    case '1':
        console.log(`Soma.`)
        let som1 = parseInt(prompt(`Digite o primeiro número: `))
        let som2 = parseInt(prompt(`Digite o segundo número: `))
        let soma = som1 + som2
        console.log(`O resultado é ${soma}.`)
        break

    case '2':
        console.log(`Subtração`)
        let sub1 = parseInt(prompt(`Digite o primeiro número: `))
        let sub2 = parseInt(prompt(`Digite o segundo número: `))
        let subtracao = sub1 - sub2
        console.log(`O resultado é ${subtracao}.`)
        break

    case '3':
        console.log(`Multiplicação.`)
        let mult1 = parseInt(prompt(`Digite o primeiro número: `))
        let mult2 = parseInt(prompt(`Digite o segundo número: `))
        let multiplicacao = mult1 * mult2
        console.log(`O resultado é ${multiplicacao}.`)
        break

    case '4':
        console.log(`Divisão.`)
        let div1 = parseInt(prompt(`Digite o primeiro número: `))
        let div2 = parseInt(prompt(`Digite o segundo número: `))
        let divisao = div1 / div2
        console.log(`O resultado é ${divisao}.`)
        break
}
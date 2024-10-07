// Um sistema de pedidos precisa informar o status de um pedido; crie um código que, ao receber
// um código de status (1 a 5), imprima a descrição correspondente ou "Status inválido" se não
// estiver na lista.
// 1 - em processamento
// 2 - enviado
// 3 - entregue
// 4 - cancelado
// 5 - devolvido

const prompt = require("prompt-sync")()

const CODIGO = parseInt(prompt("Insira o código de 1 a 5: "))

if (CODIGO == 1) {
    console.log("Em processamento.")
} else if (CODIGO == 2) {
    console.log("Enviado.")
} else if (CODIGO == 3) {
    console.log("Entregue.")
} else if (CODIGO == 4) {
    console.log("Cancelado.")
} else if (CODIGO == 5) {
    console.log("Devolvido.")
} else {
    console.log("Status inválido.")
}
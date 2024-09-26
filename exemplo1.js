const prompt = require("prompt-sync")()

const IDADE = parseInt(prompt(`Informe a sua idade: `))

const EHMAIORDEIDADE = IDADE >= 18
const NAOEHMAIORDEIDADE = !EHMAIORDEIDADE

if (NAOEHMAIORDEIDADE) {
    console.log(`É menor de idade`)
} else {
    console.log(`É maior de idade`)
}
// operadores relacionais
// MAIOR QUE ( > )
// MENOR QUE ( < )
// MAIOR OU IGUAL A ( >= )
// MENOR OU IGUAL A ( <= )
// IGUAL A ( == )
// DIFERENTE DE ( != )
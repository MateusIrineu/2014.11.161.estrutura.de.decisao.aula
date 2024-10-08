// Um gestor de projetos deseja classificar a carga de trabalho de seus colaboradores; escreva
// um código que, ao receber horas trabalhadas, imprima "Leve" para até 20 horas, "Moderada"
// para 21 a 40 horas, e "Intensa" para acima de 40 horas.

const prompt = require("prompt-sync")()

const HORASTRABALHADAS = parseInt(prompt("Insira o total de horas trabalhadas: "))

if (HORASTRABALHADAS <= 20) {
    console.log("Leve.")
} else if (HORASTRABALHADAS >= 21 && HORASTRABALHADAS <= 40) {
    console.log("Moderada.")
} else {
    console.log("Intensa.")
}
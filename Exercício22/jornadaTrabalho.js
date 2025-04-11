alert("Boas-Vindas!")
let jornada = 40
let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas:"))
let salarioHora = parseFloat(prompt("Digite o seu salário por hora:"))
let salarioTotal = salarioHora * horasTrabalhadas

if (horasTrabalhadas > jornada) {
    salarioTotal += salarioTotal * (1/2)
}

alert(`O salário total é: R$ ${salarioTotal.toFixed(2)}`)
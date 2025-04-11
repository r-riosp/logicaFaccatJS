alert("Cálculo de Média Simples")
let nota1 = parseFloat(prompt("Digite a sua primeira nota:"))
let nota2 = parseFloat(prompt("Digite a sua segunda nota:"))
let media = (nota1 + nota2) / 2

if (media < 6) {
    alert("Você foi reprovado. Não desista!")
}
else {
    alert("Você foi aprovado. Parabéns!")
}

alert(`Sua média final é: ${media.toFixed(2)}.`)
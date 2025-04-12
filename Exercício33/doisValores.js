alert("Qual é o maior dos dois valores?")
let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))

if (valor1 > valor2) {
    alert("O primeiro valor é maior.")
}
else if (valor1 < valor2) {
    alert("O segundo valor é maior.")
}
else {
    alert("Os números são iguais.")
}
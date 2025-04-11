alert("A Soma dos Dois Maiores Números")
let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))
let primeiroMaior, segundoMaior

if (valor1 > valor2 && valor2 > valor3) {
    primeiroMaior = valor1
    segundoMaior = valor2
    alert(primeiroMaior + segundoMaior)
}
else if (valor2 > valor1 && valor1 > valor3) {
    primeiroMaior = valor2
    segundoMaior = valor1
    alert(primeiroMaior + segundoMaior)
}
else if (valor3 > valor1 && valor1 > valor2) {
    primeiroMaior = valor3
    segundoMaior = valor1
    alert(primeiroMaior + segundoMaior)
}
else if (valor3 > valor2 && valor2 > valor1) {
    primeiroMaior = valor3
    segundoMaior = valor2
    alert(primeiroMaior + segundoMaior)
}
else {
    alert("Não há valor maior.")
}
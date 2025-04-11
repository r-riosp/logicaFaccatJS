alert("Ordem Crescente")
let numero1 = parseFloat(prompt("Digite o primeiro valor:"))
let numero2 = parseFloat(prompt("Digite o segundo valor:"))
let numero3 = parseFloat(prompt("Digite o terceiro valor:"))

if ((numero1 > numero2 && numero2 > numero3)) {
    alert(numero3)
    alert(numero2)
    alert(numero1)
}
else if ((numero2 > numero3 && numero3 > numero1)) {
    alert(numero1)
    alert(numero3)
    alert(numero2)
}
else if ((numero3 > numero1 && numero1 > numero2)) {
    alert(numero3)
    alert(numero2)
    alert(numero1)
}
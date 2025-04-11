alert("Positivo, negativo ou zero?")
let numero = parseFloat(prompt("Digite um número:"))

if (numero > 0) {
    alert(`O número ${numero} é positivo.`)
}
else if (numero < 0) {
    alert(`O número ${numero} é negativo.`)
}
else {
    alert("O valor é 0 (zero)")
}
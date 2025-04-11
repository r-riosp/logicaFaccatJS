alert("Ordem Crescente")
let numero1 = parseFloat(prompt("Digite o primeiro valor:"))
let numero2 = parseFloat(prompt("Digite o segundo valor:"))

if (numero1 < numero2) {
    alert(`Os números em ordem crescente são: ${numero1} e ${numero2}.`)
}
else {
    alert(`Os números em ordem crescente são: ${numero2} e ${numero1}.`)
}
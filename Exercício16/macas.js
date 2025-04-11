alert("Cálculo de maçãs compradas!")
let qtdMaca = parseInt(prompt("Digite o número de maçãs compradas:"))
let valorMaca

if (qtdMaca < 12) {
    valorMaca = 1.3
}
else {
    valorMaca = 1
}

valorTotal = valorMaca * qtdMaca

alert(`Custo total da compra foi de ${valorTotal.toFixed(2)} reais.`)
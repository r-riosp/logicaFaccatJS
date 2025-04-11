alert("Peso das Frutas")
let pesoMaca = parseInt(prompt("Digite o peso das maçãs (em Kg):"))
let pesoMorango = parseInt(prompt("Digite o peso dos morangos (em Kg):"))
let precoMaca, precoMorango, valorTotal
let pesoTotal = pesoMaca + pesoMorango

if (pesoMorango > 5) {
    precoMorango = 2.2
}
else {
    precoMorango = 2.5
}

if (pesoMaca > 5) {
    precoMaca = 1.5
}
else {
    precoMaca = 1.8
}
valorTotal = precoMaca * pesoMaca + precoMorango * pesoMorango

if ((pesoTotal > 8) || (valorTotal > 25)) {
    valorTotal *= 0.9
}

alert(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`)
alert("Cálculo do Valor do Carro!")
let valorFabrica = parseFloat(prompt("Digite o valor de fábrica do carro:"))
let percentualDistribuidor = 28 / 100
let percentualImpostos = 45 / 100
let valorDistribuidor = valorFabrica * percentualDistribuidor
let valorImpostos = valorFabrica * percentualImpostos
let valorFinal = valorFabrica + valorDistribuidor + valorImpostos
alert(`O valor total do carro é: ${valorFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
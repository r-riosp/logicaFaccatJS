alert("Cálculo do valor do combustível")
let litragemCombustivel = parseInt(prompt("Digite a litragem de combustível:"))
let tipoCombustivel = prompt("Digite o tipo do combustível:\nDigite A para Álcool\nDigite G para Gasolina")
let valor

switch (tipoCombustivel) {
    case "A":
        valor = litragemCombustivel * 2.9
        break
    case "G":
        valor = litragemCombustivel * 3.3
        break
    default:
        valor = "Opção Indefinida"
}

alert(`O valor total a pagar é: ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
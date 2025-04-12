alert("Desconto no Produto")
let nomeProduto = prompt("Digite o nome do produto:")
let qtdAdquirida = parseInt(prompt("Digite a quantidade adquirida:"))
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"))
let total = qtdAdquirida * precoUnitario
let desconto, totalDescontado

if (qtdAdquirida <= 5) {
    desconto = total * 0.02
}
else if (qtdAdquirida > 5 && qtdAdquirida <= 10) {
    desconto = total * 0.03
}
else {
    desconto = total * 0.05
}

totalDescontado = total - desconto

alert(`Valor Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n
Desconto: ${desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n
Total a Pagar: ${totalDescontado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
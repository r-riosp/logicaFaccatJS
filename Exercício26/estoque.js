alert("Verificação de Estoque")
let qtdEstoque = parseInt(prompt("Digite a quantidade atual em estoque:"))
let qtdMax = parseInt(prompt("Digite a quantidade máxima em estoque:"))
let qtdMin = parseInt(prompt("Digite a quantidade mínima em estoque:"))
let qtdMedia = (qtdMax + qtdMin) / 2

if (qtdEstoque >= qtdMedia) {
    alert("Não é necessário efetuar compra.")
}
else {
    alert("Efetuar compra para repor estoque.")
}
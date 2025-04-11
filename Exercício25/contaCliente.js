alert("Conta do Cliente")
let numeroConta = parseInt(prompt("Digite o número da conta do cliente:"))
let saldo = parseFloat(prompt("Digite o seu saldo:"))
let debito = parseFloat(prompt("Digite o valor a ser debitado:"))
let credito = parseFloat(prompt("Digite o valor a ser creditado:"))
let saldoAtual = saldo - debito + credito

if (saldoAtual > 0) {
    alert("Saldo Positivo")
}
else if (saldoAtual == 0) {
    alert("Sem Saldo")
}
else {
    alert("Saldo Negativo")
}

alert(`O seu saldo atual é: R$ ${saldoAtual}`)
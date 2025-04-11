alert("Salário com Comissão")
let salarioFixo = parseFloat(prompt("Digite o salário fixo:"))
let valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas:"))
let salarioTotal

if (valorVendas > 1500) {
    salarioTotal = salarioFixo * 1.08
}
else {
    salarioTotal = salarioFixo * 1.03
}

alert(`O salário total é: R$${salarioTotal}.`)
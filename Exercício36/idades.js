alert("Idade dos Homens e das Mulheres")
let idadeHomemA = parseInt(prompt("Digite a idade do homem A:"))
let idadeHomemB = parseInt(prompt("Digite a idade do homem B:"))
let idadeMulherA = parseInt(prompt("Digite a idade do mulher A:"))
let idadeMulherB = parseInt(prompt("Digite a idade do mulher B:"))
let mulherMaisVelha, mulherMaisNova, homemMaisNovo, homemMaisVelho
let somaIdade, produtoIdade

if (idadeMulherA > idadeMulherB) {
    mulherMaisVelha = idadeMulherA
    mulherMaisNova = idadeMulherB
}
else {
    mulherMaisVelha = idadeMulherB
    mulherMaisNova = idadeMulherA
}

if (idadeHomemA > idadeHomemB) {
    homemMaisVelho = idadeHomemA
    homemMaisNovo = idadeHomemB
}
else {
    homemMaisVelho = idadeHomemB
    homemMaisNovo = idadeHomemA
}

somaIdade = homemMaisVelho + mulherMaisNova
produtoIdade = homemMaisNovo * mulherMaisVelha

alert(`Soma das idades: ${somaIdade}.\nProduto das idades: ${produtoIdade}.`)
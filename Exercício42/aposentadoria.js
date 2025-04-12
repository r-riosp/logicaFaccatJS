alert("Qualificação de Aposentadoria")
let numeroEmpregado = parseInt(prompt("Digite o número de empregado:"))
let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"))
let anoIngresso = parseInt(prompt("Digite o ano em que ingressou na empresa:"))
let idade = 2025 - anoNascimento
let tempoContribuicao = 2025 - anoIngresso

if ((idade >= 65) || (tempoContribuicao >= 30) || (idade >= 60 && tempoContribuicao >= 25)) {
    alert(`Idade: ${idade}\n
        Tempo de Contribuição: ${tempoContribuicao}\n\n
        É possível requerer aposentadoria.`)
}
else {
    alert(`Idade: ${idade}\n
        Tempo de Contribuição: ${tempoContribuicao}\n\n
        Ainda não é possível requerer aposentadoria.`)
}
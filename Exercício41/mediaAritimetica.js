alert("Cálculo da Média de Aproveitamento")
let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))
let notaExercicios = parseFloat(prompt("Digite a nota dos exercícios:"))
let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + notaExercicios) / 7
let conceito

if (mediaAproveitamento < 6) {
    conceito = D
}
else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    conceito = C
}
else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    conceito = B
}
else {
    conceito = A
}

alert(`De acordo com sua nota, seu conceito foi: ${conceito}`)
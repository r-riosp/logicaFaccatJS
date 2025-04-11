function calcularTotalDias() {
    let ano = parseInt(prompt("Quantos anos você tem?"))
    let mes = parseInt(prompt("Quantos meses se passaram desde o seu último aniversário?"))
    let dia = parseInt(prompt("Quantos dias faltam para o seu próximo mesversário?"))
    let diasVividos = ((ano * 365) + (mes * 30) + (30 - dia))
    let resposta = document.getElementById("resposta")
    resposta.innerHTML = `Você tem ${ano} anos, ${mes} meses e ${dia} dias.`
    resposta.innerHTML += `<br>Isso equivale a ${diasVividos} dias de idade!`
    resposta.style.display = "block"
}
calcularTotalDias()
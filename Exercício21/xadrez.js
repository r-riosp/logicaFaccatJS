alert("Quanto tempo durou a partida?")
let horaInicial = parseInt(prompt("Digite o horário inicial da partida:"))
let horaFinal = parseInt(prompt("Digite o horário final da partida:"))
let duracao
if (horaFinal < horaInicial) {
    duracao = (horaFinal - horaInicial + 24)
}
else {
    duracao = horaFinal - horaInicial
}
alert(`A duração total do jogo foi de ${duracao} horas.`)
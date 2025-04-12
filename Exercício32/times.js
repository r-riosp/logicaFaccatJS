alert("Time Vencedor!")
let timeA = prompt("Digite o nome do time A:")
let golsA = parseInt(prompt("Digite a quantidade de gols do time A:"))
let timeB = prompt("Digite o nome do time B:")
let golsB = parseInt(prompt("Digite a quantidade de gols do time B:"))

if (golsA > golsB) {
    alert(`O time vencedor foi o ${timeA}`)
}
else if (golsB > golsA) {
    alert(`O time vencedor foi o ${timeB}`)
}
else {
    alert("Foi um empate!")
}
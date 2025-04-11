alert("Total Eleitores")
let total = parseInt(prompt("Qual é o total de eleitores?"))
let brancos = parseInt(prompt("Qual é o total de votos brancos?"))
let nulos = parseInt(prompt("Qual é o total de votos nulos?"))
let validos = total - brancos - nulos

let totalBrancos = (brancos/total) * 100
let totalNulos = (nulos/total) * 100
let totalValidos = (validos/total) * 100

alert(`O total de votos é ${total}`)
alert(`O percentual de votos brancos é ${totalBrancos}%`)
alert(`O percentual de votos nulos é ${totalNulos}%`)
alert(`O percentual de votos válidos é ${totalValidos}%`)
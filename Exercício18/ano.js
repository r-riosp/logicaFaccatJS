let anoAtual = parseInt(prompt("Digite o ano atual:"))
let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"))
let idade = anoAtual - anoNascimento

if (idade < 18) {
    alert("Boa! Você pode votar.")
}
else {
    alert("Você não pode votar. Espere mais um pouco!")
}
function funcao() {
    alert("Antecessor!")
    let numero = prompt("Digite um valor para descobrir o seu antecessor:")
    numero = Number(numero)
    let antecessor = numero - 1
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `O número digitado foi: ${numero}`
    resultado.innerHTML += `<br>O antecessor dele é: ${antecessor}`
    resultado.style.display = "block"
} funcao()
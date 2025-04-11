alert("Sucessor!")
let numero = parseInt(prompt("Digite um valor para descobrir o seu sucessor:"))
let sucessor = numero + 1
let resultado = document.getElementById("resultado")
resultado.innerHTML = `O número digitado foi: ${numero}`
resultado.innerHTML += `<br>O sucessor dele é: ${sucessor}`
resultado.style.display = "block"
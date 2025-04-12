alert("É um triângulo?")
let a = parseFloat(prompt("Digite o lado A do triângulo:"))
let b = parseFloat(prompt("Digite o lado B do triângulo:"))
let c = parseFloat(prompt("Digite o lado C do triângulo:"))

if ((a < b + c) || (b < a + c) || (c < b + a)) {
    alert("Os valores digitados formam um triângulo.")
}
else {
    alert("Os valores não formam um triângulo.")
}
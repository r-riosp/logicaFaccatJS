alert("Código do Usuário")

let codigoUsuario = parseInt(prompt("Digite o código do usuário:"))
while (codigoUsuario != 1234) {
    codigoUsuario = parseInt(prompt("Código Inválido. Digite novamente:"))
}

let senhaUsuario = parseInt(prompt("Digite a senha do usuário:"))
while (senhaUsuario != 9999) {
    senhaUsuario = parseInt(prompt("Senha Incorreta. Digite novamente:"))
}

alert("Acesso Permitido.")
function checaTamanho(cpf) {
    if (cpf.length == 11) {
        return true
    } else {
        return false
    }
}

function mascara(cpf) {
    let novoCpf = cpf.slice(0,3)+'.'+cpf.slice(3,6)+'.'+cpf.slice(6,9)+'-'+cpf.slice(9,11)
    return novoCpf
}

function exibe(cpf) {
    if (checaTamanho(cpf)) {
        alert(mascara(cpf))
        window.location.reload()
    } else {
        alert('O CPF informado não contém um formato válido de 11 dígitos (apenas números).')
        window.location.reload()
    }
}

let cpf = prompt('Digite um número de CPF (apenas números) para que o computador valide:')

if (!isNaN(cpf)) {
    exibe(cpf)
} else {
    alert('O CPF informado não contém um formato válido de 11 dígitos (apenas números).')
    window.location.reload()
}
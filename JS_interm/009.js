let checaPreenchimentoDosCampos = (nome, sobrenome, cpf) => {
    if (nome.value.length != 0 && sobrenome.value.length != 0 && cpf.value.length != 0) {
        return true
    } else {
        return false
    }
}

function validaCpf(cpf) {
    if (isNaN(cpf) || cpf.length != 11 || validaDigitoUm(cpf) == false || validaDigitoDois(cpf) == false) {
        return false
    } else {
        return true
    }
}

function validaDigitoUm(cpf) {
    let testeUm = ''
    let checkUm = 0
    let somaUm = 0

    for (i = 0; i < 9; i++) {
        somaUm += Number(cpf[i]) * (10 - i)
    }

    checkUm = 11 - (somaUm % 11)

    if (checkUm >= 10) {
        testeUm = 0
    } else {
        testeUm = checkUm
    }

    if (testeUm == cpf[9]) {
        return true
    } else {
        return false
    }
}

function validaDigitoDois(cpf) {
    let testeDois = ''
    let checkDois = 0
    let somaDois = 0

    for (j = 0; j < 10; j++) {
        somaDois += Number(cpf[j]) * (11 - j)
    }

    checkDois = 11 - (somaDois % 11)

    if (checkDois >= 10) {
        testeDois = 0
    } else {
        testeDois = checkDois
    }

    if (testeDois == cpf[10]) {
        return true
    } else {
        return false
    }
}


let executarChecagens = (nome, sobrenome, cpf) => {
    if (checaPreenchimentoDosCampos(nome, sobrenome, cpf) == true) {
        alert('Todos os campos foram preenchidos')
        if (validaCpf(cpf.value) == true) {
            alert('Parabéns! O seu cadastro foi realizado com sucesso!')
            window.location.reload()
        } else {
            alert('[ERRO] O seu CPF não é válido. Insira um CPF válido para consulta.')
        }
    } else {
        alert('[ERRO] Pelo menos um dos campos não foi preenchido. Preencha o campo novamente e clique no botão "Validar".')
    }
}

let nomeUsuario = document.querySelector('#nome')
let sobrenomeUsuario = document.querySelector('#sobrenome')
let cpfUsuario = document.querySelector('#cpf')
let unicButton = document.querySelector('#unicButton')

unicButton.onclick = () => {
    executarChecagens(nomeUsuario, sobrenomeUsuario, cpfUsuario)
};
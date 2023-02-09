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

function formataCpf(cpf) {
    let novoCpf = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)
    return novoCpf
}


let listaCpfs = []

let vaiContinuar = confirm(`Este software é responsável por consultar 5 números de CPF inseridos pelo usuário. Deseja continuar?`)

if (vaiContinuar) {
    for (c = 1; c <= 5; c++) {
        let cpf = prompt(`Digite o ${c}º número de CPF:`)
        listaCpfs.push(cpf)
    }

    for (k = 0; k < listaCpfs.length; k++) {
        if (validaCpf(listaCpfs[k])) {
            alert(`O CPF ${formataCpf(listaCpfs[k])} É válido.`)
        } else {
            alert(`O CPF ${listaCpfs[k]} NÃO É válido.`)
        }
    }
    
} else {
    alert('O usuário optou por não continuar com a análise. Obrigado por utilizar os sistemas X.')
    window.location.reload()
}
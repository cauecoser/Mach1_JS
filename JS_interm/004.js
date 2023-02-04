function checaTamanho(cpf) {
    if (cpf.length == 11) {
        return true
    } else {
        return false
    }
}

function mascara(cpf) {
    let novoCpf = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)
    return novoCpf
}

function exibe(cpf) {
    if (checaTamanho(cpf)) {
        // if (valida(cpf)) {
            alert(`O CPF ${mascara(cpf)} é válido.`)
            window.location.reload()
        // } else {
        //     alert(`[ERRO] O CPF ${mascara(cpf)} não é válido. Cheque o CPF informado e tente novamente.`)
        //     window.location.reload()
        // }
    } else {
        alert(`[ERRO] O CPF ${cpf} não contém um formato válido de 11 dígitos (apenas números).`)
        window.location.reload()
    }
}


let cpf = prompt('Digite um número de CPF (apenas números) para que o computador valide:')

if (!isNaN(cpf)) {
    exibe(cpf)
} else {
    alert('[ERRO] O CPF informado não contém um formato válido de 11 dígitos (apenas números).')
    window.location.reload()
}



/*ESTUDO A PARTE: VALIDAÇÃO DO CPF*/

// function checaDigitoUm(cpf) {
//     let testeUm = ''
//     let checkUm = 0
//     let somaUm = 0

//     for (i = 0; i < 9; i++) {
//         somaUm += Number(cpf[i]) * (10 - i)
//     }

//     checkUm = 11 - (somaUm % 11)

//     if (checkUm >= 10) {
//         testeUm = 0
//     } else {
//         testeUm = checkUm
//     }

//     if (testeUm == cpf[9]) {
//         return true
//     } else {
//         return false
//     }
// }

// function checaDigitoDois(cpf) {
//     let testeDois = ''
//     let checkDois = 0
//     let somaDois = 0

//     for (j = 0; j < 10; j++) {
//         somaDois += Number(cpf[j]) * (11 - j)
//     }

//     checkDois = 11 - (somaDois % 11)

//     if (checkDois >= 10) {
//         testeDois = 0
//     } else {
//         testeDois = checkDois
//     }

//     if (testeDois == cpf[10]) {
//         return true
//     } else {
//         return false
//     }
// }

// function checaViciado(cpf) {
//     if (cpf == 00000000000 || cpf == 11111111111 || cpf == 22222222222 || cpf == 33333333333 || cpf == 44444444444 || cpf == 55555555555 || cpf == 66666666666 || cpf == 77777777777 || cpf == 88888888888 || cpf == 99999999999) {
//         return false
//     } else {
//         return true
//     }
// }


// function valida(cpf) {
//     if (checaViciado(cpf)) {
//         if (checaDigitoUm(cpf) && checaDigitoDois(cpf)) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }
// }

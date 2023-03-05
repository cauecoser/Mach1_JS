function validar() {
    if (numero.value != '' && !isNaN(numero.value)) {
        return true
    } else {
        return false
    }
}

function calcular() {
    if (validar()) {
        arrValores.push(numero.value)
        valoresTriplicados = arrValores.map(element => element * 3)
        form.reset()
        numero.focus()
        if (valoresTriplicados.length <= 1) {
            resultadoH3.innerHTML = `O triplo do número digitado é: ${valoresTriplicados}.`
        }
        else {
            resultadoH3.innerHTML = `O triplo dos números digitados são: ${valoresTriplicados}.`
        }
    } else {
        alert('[ERRO] Digite um número para que seja exibido o valor do seu triplo.')
    }
}

function limpar() {
    valoresTriplicados = []
    form.reset()
    resultadoH3.innerHTML = ''
    numero.focus()
}


let btnCalcular = document.querySelector('#calcular')
let btnLimpar = document.querySelector('#limpar')
let numero = document.querySelector('#numero')
let arrValores = []
let resultadoH3 = document.querySelector('#resultado')
let form = document.querySelector('#form')

numero.focus()
btnCalcular.addEventListener('click', calcular)
btnLimpar.addEventListener('click', limpar)

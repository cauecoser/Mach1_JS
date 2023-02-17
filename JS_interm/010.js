let checaPreenchimentoDosCampos = (nome1, nome2, nome3) => {
    if (nome1.value.length != 0 && nome2.value.length != 0 && nome3.value.length != 0) {
        return true
    } else {
        return false
    }
}

let criaMensagem = (elemento, classe, texto) => {
    elemento.setAttribute('class', classe)
    elemento.innerHTML = texto
    totalBackground.appendChild(elemento)
}

let aguardaCincoSegundos = () => {
        setTimeout(() => {
        novaDiv.style.display = 'none'
        formulario.reset()
    }, 5000)
}

let executarChecagens = (nome1, nome2, nome3) => {
    if (checaPreenchimentoDosCampos(nome1, nome2, nome3) == true) {
        criaMensagem(novaDiv, 'confirmacao', textoConfirmacao)
        aguardaCincoSegundos()
    } else {
        criaMensagem(novaDiv, 'erro', textoNegativo)
        aguardaCincoSegundos()
    }
}

let nome1 = document.querySelector('#nome1')
let nome2 = document.querySelector('#nome2')
let nome3 = document.querySelector('#nome3')
let botaoSalvar = document.querySelector('#botaoSalvar')
let totalBackground = document.querySelector('#totalBackground')

let novaDiv = document.createElement('div')
let textoConfirmacao = 'Dados salvos com sucesso!'
let textoNegativo = '[ERRO] Pelo menos um dos campos não foi preenchido. Preencha todos os campos e clique no botão "Salvar".'

let formulario = document.querySelector('form')

botaoSalvar.onclick = () => {
    executarChecagens(nome1, nome2, nome3)
}
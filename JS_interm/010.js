let checarPreenchimentoDosCampos = (nome1, nome2, nome3) => {
    if (nome1.value.length != 0 && nome2.value.length != 0 && nome3.value.length != 0) {
        return true
    } else {
        return false
    }
}

let prepararMensagem = (elemento1, elemento2, texto, tipo) => {
    elemento1.classList.remove('invisivel')
    elemento1.classList.add('class', 'visivel')
    elemento2.innerHTML = texto
    elemento2.classList.add(tipo)
    elemento2.classList.add('quadroClaro')
    
}

let aguardarCincoSegundos = () => {
    setTimeout(() => {
        quadroEscuro.classList.remove('visivel')
        quadroEscuro.classList.add('invisivel')
        formulario.reset()
    }, 5000)
}

let executarChecagens = (nome1, nome2, nome3) => {
    if (checarPreenchimentoDosCampos(nome1, nome2, nome3) == true) {
        exibeNome1.innerHTML = nome1.value
        exibeNome2.innerHTML = nome2.value
        exibeNome3.innerHTML = nome3.value
    
        prepararMensagem(quadroEscuro, quadroClaro, textoConfirmacao, 'confirmacao')
        aguardarCincoSegundos()
    } else {
        prepararMensagem(quadroEscuro, quadroClaro, textoNegacao, 'erro')
        aguardarCincoSegundos()
    }
}

let nome1 = document.querySelector('#nome1')
let nome2 = document.querySelector('#nome2')
let nome3 = document.querySelector('#nome3')
let botaoSalvar = document.querySelector('#botaoSalvar')
let totalBackground = document.querySelector('#totalBackground')
let formulario = document.querySelector('form')
let quadroEscuro = document.querySelector('#quadroEscuro')
let quadroClaro = document.querySelector('#quadroClaro')
let exibeNome1 = document.querySelector('#exibeNome1')
let exibeNome2 = document.querySelector('#exibeNome2')
let exibeNome3 = document.querySelector('#exibeNome3')
let textoConfirmacao = 'Dados salvos com sucesso!'
let textoNegacao = `[ERRO] Pelo menos um dos campos não foi preenchido.<br>Preencha todos os campos e clique no botão "Salvar".`

botaoSalvar.onclick = () => {
    executarChecagens(nome1, nome2, nome3)
}
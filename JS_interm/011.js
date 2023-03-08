let botaoSalvar = document.querySelector('#botaoSalvar')
let botaoConcluir = document.querySelector('#botaoConcluir')
let botaoReset = document.querySelector('#botaoReset')
let formulario = document.querySelector('#formulario')
let nomeCliente = document.querySelector('#nome')
let emailCliente = document.querySelector('#email')
let telefoneCliente = document.querySelector('#telefone')
let listaClientes = []
let cliente = {}

function validarPreenchimento() {
    if (nomeCliente.value.trim().length > 0 && emailCliente.value.trim().length > 0 && telefoneCliente.value.trim().length > 0) {
        return true
    } else {
        return false
    }
}

function salvarCliente() {
    if (validarPreenchimento() == true) {
        cliente.nome = nomeCliente.value
        cliente.email = emailCliente.value
        cliente.telefone = telefoneCliente.value
        listaClientes.push({ ...cliente })
        formulario.reset()
    } else {
        alert('[ERRO] Por favor preencha todos os campos para prosseguir.')
    }
}

function mostrarLista() {
    formulario.innerHTML = ''
    listaClientes.forEach(cliente => {
        formulario.innerHTML += `
            <ul>
                <li>${cliente.nome}</li>
                <li>${cliente.email}</li>
                <li>${cliente.telefone}</li>
            </ul>
        `
    })
    formulario.style.alignItems = 'normal'
}

function retornaELimpaFormulario() {
    window.location.reload()
}

botaoSalvar.addEventListener('click', salvarCliente)
botaoConcluir.addEventListener('click', mostrarLista)
botaoReset.addEventListener('click', retornaELimpaFormulario)

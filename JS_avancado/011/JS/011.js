let mensagem = document.querySelector('#message')
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let endereco = document.querySelector('#endereco')
let telefone = document.querySelector('#telefone')
let salvar = document.querySelector('#salvar')

let campos = [nome, idade, telefone, endereco]

salvar.addEventListener('click', () => validaCampos(campos))

function limpaMensagem() {
    setTimeout(() => {
        mensagem.innerHTML = ''
    }, 3000)
}
function validaCampos(campos) {
    return new Promise((resolve, reject) => {
        let camposInvalidos = []
        let camposValidos = campos.filter(element => {
            if (element.value.trim().length === 0) camposInvalidos.push(element)
            return element.value.trim().length > 0
        })
        if (camposValidos.length === campos.length) {
            resolve()
        } else {
            reject(camposInvalidos)
        }
    }).then(() => {
        mensagem.innerHTML = `<p>Dados salvos com sucesso!<p>`
        limpaMensagem()
    }).catch((campos) => {
        mensagem.innerHTML = ''
        campos.forEach(element => {
            mensagem.innerHTML += `<p>O campo ${element.name.toUpperCase() } é obrigatório!`
        });
        limpaMensagem()
    });
}
let divLoading = document.querySelector('#loading')
let divMensagem = document.querySelector('#mensagem')

let cep = document.querySelector('#cep')
let url = ''

let logradouro = document.querySelector('#logradouro')
let bairro = document.querySelector('#bairro')
let uf = document.querySelector('#uf')

let cepRequest = new XMLHttpRequest();

cepRequest.onreadystatechange = function () {

    if (cepRequest.readyState === 4) {
        if (cepRequest.status === 200) {
            // alert('OK')
            console.log(cepRequest.responseText)
            let resposta = JSON.parse(cepRequest.responseText)
            console.log(resposta)
            logradouro.innerHTML = `${resposta.address}`
            bairro.innerHTML = `${resposta.district}`
            uf.innerHTML = `${resposta.city}`
            escondeDiv(divMensagem,0.3)
        }
        else {
            divMensagem.style.display = 'block'
            escondeDiv(divMensagem,1)
        }
    } else {
        if (cepRequest.readyState === 1) {
            divLoading.style.display = 'block'
            escondeDiv(divLoading,0.5)
        }
    }
}

function escondeDiv(div, time) {
    setTimeout(() => {div.style.display = 'none'}, (time*1000));
}

cep.addEventListener('click', () => {
    url = `https://cdn.apicep.com/file/apicep/${cep.value}.json`
    cepRequest.open('GET', url, true)
    cepRequest.send()
})
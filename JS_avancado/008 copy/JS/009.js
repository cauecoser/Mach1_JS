let divLoading = document.querySelector('#loading')
let divMensagem = document.querySelector('#mensagem')

let cep = document.querySelector('#cep')
let pagina = ''

let logradouro = document.querySelector('#logradouro')
let bairro = document.querySelector('#bairro')
let uf = document.querySelector('#uf')

let cepRequest = new XMLHttpRequest();

cepRequest.open('GET', `https://cdn.apicep.com/file/apicep/61700-000.json`, true)

cepRequest.onreadystatechange = () => {
    console.log(cepRequest.readyState)  
    // if (cep.value.trim().length == 0) {
    //     alert('O CEP precisa ser preenchido!')
    //     window.location.reload()
    // }

    if (cepRequest.readyState === 4) {
        if (cepRequest.status === 200) {
                let resposta = JSON.parse(cepRequest.responseText)
                console.log(resposta)
                logradouro.innerHTML += `${resposta.city}`
                bairro.innerHTML += `${resposta.city}`
                uf.innerHTML += `${resposta.city}`
        } 
    else {
            divMensagem.style.display = 'block'
        }
    } else {
        if (cepRequest.readyState === 1) {
            divLoading.style.display = 'block'
        }
    }
}

cep.addEventListener('click', () => cepRequest.send())
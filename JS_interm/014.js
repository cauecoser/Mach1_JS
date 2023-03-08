//função que execurta a montagem da lista no HTML
function listarUsuarios(lista) {
    lista.forEach(usuario => {
        let trTds = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.sexo}</td>
                <td>${usuario.idade}</td>
                <td>${usuario.email}</td>
            </tr>
        `
        resultado.innerHTML += trTds
    })
}

// function comparaValores(obj) {
//     if () {
//         return true
//     } else {
//         return false
//     }
// }

//Função que executa pesquisa e monta a tabela com o resultado
function pesquisar(lista) {
    novaLista = lista.filter(obj => obj.id == textoPesquisa.value || obj.nome.toLowerCase().includes(textoPesquisa.value.toLowerCase()) || obj.sexo.toLowerCase().includes(textoPesquisa.value.toLowerCase()) || obj.idade == textoPesquisa.value || obj.email.toLowerCase().includes(textoPesquisa.value.toLowerCase()))
    resultado.innerHTML = ''
    formPesquisa.reset()
    listarUsuarios(novaLista)
    textoPesquisa.focus()
}

//Função que executa a limpeza da lista mantendo o padrão inicial da tabela
function limpar(lista) {
    resultado.innerHTML = ''
    formPesquisa.reset()
    listarUsuarios(lista)
    textoPesquisa.focus()
}

//Definição das variáveis utilizadas
let resultado = document.querySelector('#resultado')
let btnPesquisar = document.querySelector('#btnPesquisar')
let btnLimpar = document.querySelector('#btnLimpar')
let textoPesquisa = document.querySelector('#textoPesquisa')
let formPesquisa = document.querySelector('#pesquisa')
let novaLista = []
const listaUsuarios = [
    {
        id: 1,
        nome: "Thiago Pereira",
        sexo: "Masculino",
        idade: 20,
        email: "fulanodetal@termail.com",
    },
    {
        id: 2,
        nome: "Thais Lins",
        sexo: "Feminino",
        idade: 19,
        email: "thaisdetal@gtemail.com",
    },
    {
        id: 3,
        nome: "Mariana Ferreira",
        sexo: "Feminino",
        idade: 25,
        email: "marianaferreira@tailme.com",
    },
    {
        id: 4,
        nome: "Pedro Ivo Silva",
        sexo: "Masculino",
        idade: 28,
        email: "manuelatrait@gteprmail.com",
    }
]

//Adição da chamada da função que monta a tabela no carrregamento da página
addEventListener('load', () => listarUsuarios(listaUsuarios))
//Adição do evento que aguarda o click do botão "Pesquisar" para executar a função "pesquisar"
btnPesquisar.addEventListener('click', () => pesquisar(listaUsuarios))
//Adição do evento que aguarda o click do botão "Limpar Pesquisa" para executar a função "limpar"
btnLimpar.addEventListener('click', () => limpar(listaUsuarios))
//Inserção do foco da página no input (cursor no impput)
textoPesquisa.focus()

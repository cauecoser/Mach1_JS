let container = document.querySelector('#paragrafos')
let recebeClasse = document.querySelector('#recebeClasse')
let botaoSetar = document.querySelector('#botaoSetar')
let titulo = document.querySelector('#titulo')


function alerta() {
    alert('A função criada no parágrafo está funcionando!!')
}


function incluirParagrafo() {

    container.innerHTML = `
        <p class="${recebeClasse.value}" onclick="alerta()">O texto digitado foi "${recebeClasse.value}".<p>
    `
}

botaoSetar.addEventListener('click', incluirParagrafo)

let checaNumeroDeElementosDoBody = (quantidadeDeFilhosDoBody) => {
    if (quantidadeDeFilhosDoBody > 5) {
        return true
    } else {
        return false
    }
}

let exibeTextosDosParagrafosDoBody = (paragrafos) => {
    paragrafos.forEach(element => {
        console.log(element.outerText)
    })
}

let filhosDeBody = document.body.childElementCount
console.log(filhosDeBody)

console.log(checaNumeroDeElementosDoBody(filhosDeBody))

// let paragrafosDoBody = document.querySelectorAll('p')
let tagsPDoBody = document.body.querySelectorAll('p')
console.log(tagsPDoBody)

exibeTextosDosParagrafosDoBody(tagsPDoBody)
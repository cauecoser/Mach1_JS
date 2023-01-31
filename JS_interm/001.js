let itens = ['Sem cadastro', 'Leite', 'Ovo', 'Farinha', 'Milho', 'Café']

let cod = Number(prompt('Digite o código da posição para saber qual o produto correspondente:'))

if (!isNaN(cod)) {
    if (cod >= itens.length) {
        let confirma = confirm(`${itens[0]}. Deseja incluir um novo produto?`)
        if (confirma) {
            let novoProduto = prompt('Digite o nome do novo produto:')
            if (novoProduto != null) {
                itens.push(novoProduto)
                alert(`O novo produto incluído é ${novoProduto}. O código deste novo produto é ${(itens.length - 1)}.`)
            } else {
                alert('Não foi adicionado nenhum produto novo.')
            }
        } else {
            alert('Obrigado por utilizar nossos sistemas.')
        }
    } else {
        alert(`O produto correspondente ao código ${cod} é ${itens[cod]}.`)
    }
} else {
    alert('[ERRO] Necessário digitar um número para checar o produto correspondente.')
}
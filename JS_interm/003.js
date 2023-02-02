let apto = {
    endereco: {
        rua: 'Rua A',
        numero: 20,
        complemento: '3º andar, Apto 320, Bloco C',
        bairro: 'Centro',
        cidade: 'Fortaleza',
        cep: '60.000-000'
    },
    area: '137m2',
    tipoCozinha: 'Americana',
    quantidadeQuartos: 3,
    quartosSuites: 2,
    varanda: 'Sim',
    tipoPiso: 'Porcelanato',
    salaConjugada: 'Não'
}

console.log('Exibindo todo o objeto "apto":', apto)
console.log('Bairro do objeto "apto":', apto.endereco.bairro)
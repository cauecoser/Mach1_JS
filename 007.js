let chegada = prompt('Digite os nomes dos pilotos de acordo coma  ordem de chegada, separados por vírgula (,):')

if (chegada.length > 0) {

    let podium = chegada.split(',')
    let colocacao = ''

    for (i = 1; i <= podium.length; i++) {
        if (!isNaN(podium[(i - 1)])) {
            alert('O nome de um piloto não pode ser um número!')
        } else {
            for (i = 1; i <= podium.length; i++) {
                if (i <= 3) {
                    colocacao += 'PODIO' + ' - ' + i + ' - ' + podium[(i - 1)].toUpperCase() + '\n'
                } else {
                    colocacao += i + ' - ' + podium[(i - 1)].toUpperCase() + '\n'
                }
            }
            alert(colocacao)
        }
    }
    window.location.reload()
} else {
    alert('[ERRO] Não foi identificado nenhum valor. Informe a colocação dos pilotos!')
    window.location.reload()
}
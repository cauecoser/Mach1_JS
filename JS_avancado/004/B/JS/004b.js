{
    try {
        console.log('Iniciando o processamento!')
        throw new Error('ERRO FATAL')
    } catch (e) {
        console.error(e.message)
    } finally {
        console.log('Fim do processo.')
    }

}
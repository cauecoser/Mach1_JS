function montarTabuada(numero) {
    function indicesTabuada(n1, n2) {
        for (i = n1; i <= n2; i++) {
            let linha = `${i} x ${numero} = ${i * numero}`
            console.log(linha)
        }
    }
    return indicesTabuada;
}

const tabuada2 = montarTabuada(2)
tabuada2(1, 10)
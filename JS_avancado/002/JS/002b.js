
function criaContadorNumerico(n) {

    function contador() {
        return n++
    }
    return contador;
}

const contador = criaContadorNumerico(1)

const novoContador = criaContadorNumerico(11)

console.log(contador())

console.log(novoContador())

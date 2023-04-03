const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera']
const tempoEntrega = 15

function calcularTempoSaida(arrClientes, nome, cont = 0) {
    
    if (arrClientes.length <= cont) {
        return null
    }

    if (nome == arrClientes[cont]) {
        return (arrClientes.length - cont) * tempoEntrega
    } else {
        return calcularTempoSaida(arrClientes, nome, ++cont)
    }
}

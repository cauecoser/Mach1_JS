const contadorExterno = criaContadorNumerico(1)

class Aluno {
    #id = 0
    nome = ''
    endereco = ''
    data_nascimento = new Date()
    email = ''
    telefone = ''
    avaliacoes = []

    constructor(nome) {
        if (nome.length == 0) throw new Error('É necessário preenchmento do nome do aluno')
        this.nome = nome
        this.#id = contadorExterno()
    }

    insereAvaliacao(avaliacao) {
        if (avaliacao instanceof Avaliacao) this.avaliacoes.push(avaliacao)  
    }

}

function criaContadorNumerico(n) {
    function contador() {
        return n++
    }
    return contador;
}

class Avaliacao {
    tipo = ''
    note = 0
    obs = ''

    constructor(tipo) {
        if (tipo.length == 0) throw new Error('É necessário preenchimento do tipo de avaliação')
        this.tipo = tipo
    }
}

const aluno0 = new Aluno ('Pedro')
const aluno1 = new Aluno ('Lucas')

const avaliacao0 = new Avaliacao ('Global')
const avaliacao1 = new Avaliacao ('Semestral')

aluno0.insereAvaliacao(avaliacao0)
aluno0.insereAvaliacao(avaliacao1)

console.log(aluno0)
console.log(aluno1)
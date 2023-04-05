class Aluno {
    nome = ''
    endereco = ''
    data_nascimento = new Date()
    email = ''
    telefone = ''
    avaliacoes = []

    constructor(nome) {
        if (nome.length == 0) throw new Error('É necessário preenchmento do nome do aluno')
        this.nome = nome
    }

    insereAvaliacao(avaliacao) {
        if (avaliacao instanceof Avaliacao) this.avaliacoes.push(avaliacao)  
    } 
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

const aluno = new Aluno ('Pedro')

const avaliacao = new Avaliacao ('Global')
const avaliacao1 = new Avaliacao ('Semestral')

aluno.insereAvaliacao(avaliacao)
aluno.insereAvaliacao(avaliacao1)

console.log(aluno)
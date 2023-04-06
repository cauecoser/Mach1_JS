const contadorExterno = criaContadorNumerico(1)

class Aluno {
    #id
    data_nascimento
    #idade
    
    nome = ''
    endereco = ''
    email = ''
    telefone = ''
    #avaliacoes = []

    constructor(nome, nascimento) {
        if (nome.length == 0) throw new Error('É necessário preenchmento do nome do aluno!')
        if (nascimento.length == 0) throw new Error('Data de nascimento não informada!')
        this.nome = nome
        this.data_nascimento = new Date(nascimento)
        this.#id = contadorExterno()
    }

    get idade() {
        this.#idade = parseInt((new Date() - new Date(nascimento)) / (1000 * 60 * 60 * 24) / 365)
        return this.#idade
    }
    
    get resultado() {
        return this.obterMedia() >= 7 
    }

    insereAvaliacao(avaliacao) {
        if (avaliacao instanceof Avaliacao) this.#avaliacoes.push(avaliacao)
    }
 
    obterMedia() {
        let somaDasNotas = this.#avaliacoes.reduce((notaPrevia,obj) => {
            return notaPrevia+obj.nota
        }, 0)
        return somaDasNotas / this.#avaliacoes.length
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
    nota = 0
    obs = ''

    constructor(tipo, nota, obs) {
        if (tipo.length == 0) throw new Error('É necessário preenchimento do tipo de avaliação')
        if (nota < 0 || typeof(nota) != 'number') throw new Error('Nota inválida!')
        this.tipo = tipo
        this.nota = nota
        this.obs = obs ?? 'Sem observações.'
    }
}


const aluno0 = new Aluno('Cauê', '1987-6-24')
const aluno1 = new Aluno('Charle', '1990-12-8')

const avaliacao0 = new Avaliacao('Global', 10, 'Aluno mal criado!')
const avaliacao1 = new Avaliacao('Semestral', 8)

aluno0.insereAvaliacao(avaliacao0)
aluno0.insereAvaliacao(avaliacao1)

console.log(aluno0.obterMedia())
console.log(aluno0.resultado)

console.log(aluno0)
console.log(aluno1)
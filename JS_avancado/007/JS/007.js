class animal {
    nome
    constructor(nome) {
        this.nome = nome
    }
}

class ave extends animal {
    tamanhoBico
    constructor(nome, tamanhoBico) {
        super(nome)
        this.tamanhoBico = tamanhoBico
    }
}

class aveFalante extends ave {
    palavras = []
    constructor(nome, tamanhoBico, palavras) {
        super(nome, tamanhoBico)
        this.palavras = palavras
    }
}

class aveNaoFalante extends animal {
    constructor (nome, tamanhoBico) {
        super(nome, tamanhoBico)
    }
}

class peixe extends animal {
    tipoAgua
    constructor(nome, tipoAgua) {
        super(nome)
        this.tipoAgua = tipoAgua
    }
}

class mamifero extends animal {
    possuiCalda
    constructor(nome, possuiCalda) {
        super(nome)
        this.possuiCalda = possuiCalda
    }
}

class canino extends mamifero {
    consegueLatir
    constructor (nome, possuiCalda, consegueLatir){
        super(nome, possuiCalda)
        this.consegueLatir = consegueLatir
    }
}

class felino extends mamifero {
    consegueMiar
    constructor (nome, possuiCalda, consegueMiar) {
        super(nome, possuiCalda) 
        this.consegueMiar = consegueMiar
    }
}


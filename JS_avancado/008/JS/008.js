class Product {
    #id
    name
    constructor(id, name) {
        this.#id = parseInt(id)
        this.name = name
    }
}

class Order {
    #id
    created
    #products = []

    constructor(id, data = new Date.now, products) {
        this.#id = id
        this.created = data
        this.#products = products
    }

    addProduct(productCode) {
        if (productCode instanceof Product) {
            this.#products.push(productCode)
        } else {
            throw new Error('O código informado não é válido!')
        }
    }

    calculateShipping() {
        throw new Error('Método não implementado!')
    }
}

class OrderStore extends Order {
    tableNumber
    constructor(id, data, products, tableNumber) {
        super(id, data, products)
        this.tableNumber = parseInt(tableNumber)
    }

    calculateShipping() {
        return 0
    }
}

class Cliente {
    #id
    name
    address
    zipCode
    active
    constructor(id, name, address, zipCode, active) {
        this.#id = id
        this.name = name
        this.address = address
        this.zipCode = zipCode 
        this.active = active
    }

}

class OrderDelivery extends Order {
    cliente
    constructor(id, data, products, cliente = new Cliente) {
        super(id, data, products)
        if (cliente instanceof Cliente) {
            this.cliente = cliente
        } else {
            throw new Error('Cliente informado inválido!')
        }
    }

    calculateShipping(zip) {
        if (zip) this.cliente.zipCode = zip
        const zip1stNumber = zip.slice(0, 1)
        if (zip1stNumber < 0) {
            throw new Error('CEP Inválido!')
        } else {
            if (zip1stNumber < 5) {
                return 5
            } else {
                return 10
            }
        }
    }
}

console.log(new OrderDelivery(1,new Date('2023-4-17'), new Product(1, 'copo'), new Cliente(1,'Joao','rua almeida 2000', '72100053', true)))
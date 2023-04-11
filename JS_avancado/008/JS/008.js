class product {
    #id
    name
    constructor(id, name) {
        this.#id = parseInt(id)
        this.name = name
    }
}

class order {
    #id
    created
    #products = []

    constructor(id, data = new Date.now, products) {
        this.#id = id
        this.created = data
        this.#products = products
    }

    addProduct(productCode) {
        if (productCode instanceof product) {
            this.#products.push(productCode)
        } else {
            throw new Error ('O código informado não é válido!')
        }
    }

    calculateShipping() {
        throw new Error('Método não implementado!')
    }
}

class orderStore extends order {
    tableNumber
    constructor(id, data, products, tableNumber) {
        super(id, data, products)
        this.tableNumber = parseInt(tableNumber)
    }

    calculateShipping() {
        return 0
    }
}
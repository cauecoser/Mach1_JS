const itens = [
    {
        nome: 'Menu 1',
        itens: [
            { nome: 'Menu 1.1', itens: [] },
            { nome: 'Menu 1.2', itens: [] },
            { nome: 'Menu 1.3', itens: [{ nome: 'Menu 1.3.1', itens: [] }] },
        ]
    },
    {
        nome: 'Menu 2',
        itens: [
            {
                nome: 'Menu 2.1',
                itens: [
                    {
                        nome: 'Menu 2.1.1',
                        itens: [
                            {
                                nome: 'Menu 2.1.1.1',
                                itens: [
                                    { nome: 'Menu 2.1.1.1.1', itens: [] },
                                    { nome: 'Menu 2.1.1.1.2', itens: [] },
                                ]
                            }
                        ]
                    },
                    { nome: 'Menu 2.1.2', itens: [] },
                ]
            },
            { nome: 'Menu 2.2', itens: [{ nome: 'Menu 2.2.1', itens: [] }] },
        ]
    }
]

function funcaoRecursiva(menu, arrayItens, arrMenus = []) {
    for (item of arrayItens) {
        arrMenus.push(item.nome)
        if(menu==item.nome) {
            return arrMenus.join(' > ')
        }

        if (item.itens.length > 0) {
            let retorno = funcaoRecursiva(menu, item.itens, arrMenus)
            if (retorno != null) {
                return retorno
            }
        }
        arrMenus.pop()
    }
    return null
}
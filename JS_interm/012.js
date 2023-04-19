function listarUsuarios() {
    listaUsuarios.forEach(obj => {

        let trTds = `
            <tr>
                <td>
                    ${obj.id}
                </td>
                <td>
                    ${obj.nome}
                </td>
                <td>
                    ${obj.sexo}
                </td>
                <td>
                    ${obj.idade}
                </td>
                <td>
                    ${obj.email}
                </td>
            </tr>
        `

        resultado.innerHTML += trTds
    })

}

let resultado = document.querySelector('#resultado')

const listaUsuarios = [
    {
        id: 1,
        nome: "Thiago Pereira",
        sexo: "Masculino",
        idade: 20,
        email: "fulanodetal@termail.com",
    },
    {
        id: 2,
        nome: "Thais Lins",
        sexo: "Feminino",
        idade: 19,
        email: "thaisdetal@gtemail.com",
    },
    {
        id: 3,
        nome: "Mariana Ferreira",
        sexo: "Feminino",
        idade: 25,
        email: "marianaferreira@tailme.com",
    },
    {
        id: 4,
        nome: "Pedro Ivo Silva",
        sexo: "Masculino",
        idade: 28,
        email: "manuelatrait@gteprmail.com",
    }
]

addEventListener('load', () => listarUsuarios())
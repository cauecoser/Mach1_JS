let animal = prompt('Digite o tipo de animal para o qual deseja saber os serviços disponíveis em nosso PetShop:').toLocaleLowerCase()

switch (animal) {
    case 'cachorro':
    case 'gato':
    case 'coelho':
        alert(`Para ${animal}s oferecemos os serviços de banho, tosa e também temos rações.`)
        break

    case 'cavalo':
    case 'cabra':
    case 'jumento':
        alert(`Para ${animal}s oferecemos os serviços de veterinário especializado e também temos rações.`)
        break
    case 'passarinho':
        alert(`Para ${animal}s possuímos o serviço de implante de rastreador e tambpem temos rações.`)
        break
    case 'rato':
        alert(`para ${animal}s não possuímos serviços, porém oferecemos gaiolas especiais e rações.`)
        break
    default:
        alert(`Desculpe, não realizamos atendimento para ${animal}s em nosso PetShop. Ficamos gratos por ter procurado nosso atendimento!`)
}

window.location.reload()
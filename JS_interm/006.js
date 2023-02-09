let recebeSalario = () => Number(prompt('Informe o seu salário (com separador apenas para casas decimais) e saiba o valor a ser retido na fonte para imposto de renda (IR).').replace(",","."))

let validaSalario = (salario) => {
    if (isNaN(salario) || salario=='') {
        alert('[ERRO] O valor informado não é um valor válido!')
        validaSalario(recebeSalario())
    } else {
        // switch (salario) {
        //     case (salario>=1903.99 && salario<=2826.65):
        //         descontoDoSalario = 7.5/100*salario
        //     break
        //     case (salario>=2826.66 && salario<=3751.05):
        //         descontoDoSalario = 15/100*salario
        //     break
        //     case (salario>=3751.06 && salario<=4664.68):
        //         descontoDoSalario = 22.5/100*salario
        //     break
        //     case (salario>4664.68):
        //         descontoDoSalario = 27.5/100*salario
        //     break
        //     default: descontoDoSalario = 0
        // }
        if (salario <1903.99) {
            descontoDoSalario = 0
        } else if (salario>=1903.99 && salario<=2826.65) {
            descontoDoSalario = 7.5/100*salario
        } else if (salario>=2826.66 && salario<=3751.05) {
            descontoDoSalario = 15/100*salario
        } else if (salario>=3751.06 && salario<=4664.68) {
            descontoDoSalario = 22.5/100*salario
        } else {
            descontoDoSalario = 27.5/100*salario
        }

        alert(`O desconto do salário R$ ${salario} será de R$ ${descontoDoSalario.toFixed(2)}.`)
        window.location.reload()
    }
}

let descontoDoSalario = 0
validaSalario(recebeSalario())


let anosExperiencia = Number(prompt('Digite o número de anos de experiência do piloto:'))

if (isNaN(anosExperiencia)) {
    alert('Digite apenas números para os anos de experiência do piloto.')
    window.location.reload()

} else {

    if (anosExperiencia<2) {
        alert('O aluno ainda não possui período de experiência suficiente para passar pela sua primeira reciclagem.')
        window.location.reload()

    } else {
        let cont = 0

        while(anosExperiencia>=2) {
            anosExperiencia-=2
            cont++
        }

        alert(`O piloto passou por ${cont} reciclagens.`)
        window.location.reload()
    }
}
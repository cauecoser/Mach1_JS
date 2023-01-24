let caractere = prompt('Digite uma letra do alfabeto:').toLowerCase()

if (isNaN(caractere) && caractere.length==1) {
    if(caractere=='a'||caractere=='e'||caractere=='i'||caractere=='o'||caractere=='u') {
        alert('A letra digitada é uma vogal.')
    } else {
        alert('A letra digitada é uma consoante.')
    }
} else {
    alert('[ERRO] Digite uma letra, e apenas uma, para obter o resultado.')
    window.location.reload()
}
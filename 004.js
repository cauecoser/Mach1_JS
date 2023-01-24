let caractere = prompt('Digite uma letra do alfabeto:')

if (isNaN(caractere)) {
    if(caractere=='a'||caractere=='e'||caractere=='i'||caractere=='o'||caractere=='u') {
        alert('A letra digitada é uma vogal.')
    } else {
        alert('A letra digitada é uma consoante.')
    }
} else {
    alert('[ERRO] Digite uma letra para obter o resultado.')
}
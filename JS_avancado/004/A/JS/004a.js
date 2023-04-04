// FUNÇÕES SENDO IMPORTADAS PELOS SEUS RESPECTIVOS NOMES

// import { somar } from "./MODULES/toExport.mjs"
// import { subtrair } from "./MODULES/toExport.mjs"
// import { multiplicar } from "./MODULES/toExport.mjs"
// import { dividir } from "./MODULES/toExport.mjs"

// OU

// import { somar, subtrair, multiplicar, dividir } from './MODULES/toExport.mjs'


// VISUALIZAÇÃO
// console.log(somar(15,3))
// console.log(subtrair(15,3))
// console.log(multiplicar(15,3))
// console.log(dividir(15,3))


// FUNÇÕES SENDO IMPORTADAS ATRAVÉS DE UM OBJETO COM ALIAS

import * as calculadora from './MODULES/toExport.mjs'

console.log(calculadora.somar(15,3))
console.log(calculadora.subtrair(15,3))
console.log(calculadora.multiplicar(15,3))
console.log(calculadora.dividir(15,3))

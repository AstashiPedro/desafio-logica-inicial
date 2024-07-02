
//aqui aprendemos sobre escopos
let resultado = 2 * 5 + 5
let resultado2 = 2 * (5 + 5)
let resultado3 = 2 * (5 + 5) - 10
let resultado4 = 2 * ((5 + 5) - 10)
let bla = 20 / 5

console.log(resultado + " aqui o programa executou a operação normal na ordem padrão, pois não tem parêntese ")
console.log(resultado2 + " Agora ele fez a soma primeiro para depois fazer a multiplicação devido o parêntese ")
console.log(resultado3 + " Agora ele fez a soma primeiro para depois fazer a multiplicação devido o parêntese ")
console.log(resultado4 + " Agora o resultado deu zero, pois existe parêntese prioritario na soma e em seguida na subtração")
console.log(bla)

//O operador NOT é representado pelo simbolo "!" (exclamação), ele é utilizado para representar negação ou diferenciação entre uma variavel e outra. 

let nome = "João"
let idade = 19

let resultado = (nome == "João") && (idade == 19)
console.log(resultado)

//O resultado deu TRUE, porque o nome é igual a joão e a idade é igual a 19 como mostra no resultado

//Agora no exemplo abaixo, vai dar FALSE e será usado o operador NOT representado por "!" (exclamação

let resultado2 = (nome !== "João") && (idade == 19)
console.log(resultado2)
//Deu falso, mesmo que a idade realmente seja 19, o nome não é joãol, pois ao usar o operador NOT "!" o nome joão não é mais verdadeiro, é como se ele tivesse mudado
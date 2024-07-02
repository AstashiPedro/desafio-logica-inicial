
let numero = "1"

console.log(numero === 1)

//guardar o valor em uma variavel de resultado
let marca = "Apple"
let resultado = marca === "Samsung"

console.log(" sao de empresas diferente? " +resultado)

// = e atribuição
// == e para comparar o valor
// === e para comparar o valor e o formato do conteudo
// !== e difente
//exemplo a pessoa ta com cpf bloqueado pelo serasa nao consegue fazer compras
let cpfBloqueado = "097.484.946-40"
let cpfUsuario = "528.033.726-90"
//aqui estou perguntando se o cpf dessa pessoa esta bloqueado ou liberado para compras
let CPFrestrito = cpfBloqueado !== cpfUsuario

console.log(" o usuario pode fazer compras? " + CPFrestrito)

//outro exemplo esta pessoa esta permitida para embarcar no voo
let CPFPermitido = "097.484.946-40"
//e esta pessoa aqui nao esta permitida para entrar no voo
let cpfdigitado = "528.033.726-90"
//aqui esta perguntando se o cpf digitado pode embarcar no voou
let podeEmbarcar = cpfdigitado === CPFPermitido
//agora estou colocando na tela se ta ou nao bloqueado

console.log(" Voce pode embarcar no voou? " + podeEmbarcar)

//deixar mais claro agora sobre diferente
//aqui e o lula
let ladrao = "ladrao"
//ele nunca roubou
let bompresidente = "nao ladrao"
//agora vai verificar se e difente ou nao de ladrao
let honestidade = bompresidente !== ladrao
//agora vai mostrar na tela o resultado

console.log(" lula ja roubou o pais? " + honestidade)

//este sinal = significa comparacao
//este sinal == significa igual a compara valor
//este sinal === significa igual a compara valor e formato se e numero, number, ou texto, string
let texto = "Pedro"

console.log(texto === "pedro")


//toma cuidado com textos de letras maiusculas da diferença

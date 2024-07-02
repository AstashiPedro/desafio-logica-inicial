
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Para viajar comigo no canada voce precisa ser maior de idade entao vou criar uma variavel de idade que a pessoa colocou

let idade = 18

//Agora vai precisar do visto entao vou criar uma variavel de visto ja verdadeira permitida que a pessoa colocou

let VistoVerificado = true

//Agora aqui em baixo vou criar o resultado no final do documento explicarei oque significa cada coisa do comando

let resultado = (idade >= 18) && (VistoVerificado === true)

//let como sabemos significa variavel = como ja sabemos significa atribuição, >= como ja sabemos significa maior ou igual a 18 anos , === como ja sabemos significa que ele irá verificar o tipo de dados se e numero e letra e comparar dois valores eleva para verdadeiro

//Agora vou verificar se e a idade e maior ou igual a 18 anos junto com o verificado

console.log(" esta pessoa tem a idade permitida e o visto pronto para viajar comigo? " + resultado)

//Deu true aqui pois a pessoa tem 18 anos e ta com o visto certo

//Agora vou fazer a pessoa ser menor de idade

idade = 17

//Aqui em baixo fiz a mesma coisa do comando de cima como variavel resultado2

let resultado2 = (idade >= 18) && (VistoVerificado === true)

console.log(" esta pessoa tem a idade permitida e o visto pronto para viajar comigo? " + resultado2)

//Deu false aqui pois a idade da pessoa nao e 18 anos ou mais

//Agora vou fazer o visto da pessoa ser falso ela nao ta com o visto original so que a idade dela esta certa para entrar na viagem para o canada

idade = 18

VistoVerificado = false

resultado3 = (idade >= 18) && (VistoVerificado === true)

//Aqui vai mostrar na tela se a pessoa pode viajar ou nao comigo

console.log(" esta pessoa tem a idade permitida e o visto pronto para viajar comigo? " + resultado3)

//Deu false aqui pois o visto da pessoa nao e verdadeiro

//Segundo exemplo: voce esta criando um jogo ai pra pessoa passar de fase ela precisa pegar 800 moedas pra passar a fase vou criar a variavel de moedas e precisa ter que pegar 1 item estrela

//Aqui ele coletou 800 moedas

let moedasColetadas = 800

//Agora a pessoa pegou 1 item estrela

let itemColetados = " 1 estrela "

//Agora vai fazer a verificação se a pessoa pegou 1 item estrela e se ela pegou 800 moedas

let resultado4 = (moedasColetadas === 800) && (itemColetados === " 1 estrela ")

//Aqui joguei na tela se a missao foi concluida ou nao
console.log(" a missao foi concluida? " + resultado4)

//*TOMA CUIDADO COM LETRAS MAIUSCULAS E MINUSCULAS E NUMEROS E ESPAÇOS TAMBEM FAZ DIFERENÇA PODE DAR INTERFERENCIA NO COMANDO OLHA O EXEMPLO ABAIXO*

itemColetados = " 1 estrela "

//Aqui fiz o comando para mostrar que vai dar erro usando a variavel com a letra maiuscula e la em cima tava escrito com letra minuscula por isso tem que prestar atencao no comando 

resultado4 = (moedasColetadas === 800) && (itemColetados === " 1 Estrela")

//Vou mostrar na tela que vai dar erro false viu que faz diferença entao nao cometa erros de letras maiusculas e minuscula e numeros e espacos que faz muita diferença cuidado com o portugues

console.log(" a missao foi concluida? " + resultado4)

//Agora vai jogar na tela se a pessoa completou a fase ou nao

resultado4 = (moedasColetadas === 800) && (itemColetados === " 1 estrela ")

console.log(" a missao foi concluida? " + resultado4)

//Agora vou fazer a pessoa ter coletados menos de 800 moedas

moedasColetadas = 420

//A pessoa pegou essa estrela so que ela nao completou as moedas necessarias

itemColetados = " 1 estrela "

resultado5 = (moedasColetadas === 800) && (itemColetados === " 1 estrela ")

//Vai mostrar na tela se a pessoa concluiu ou nao a missao

console.log(" a missao foi concluida? " + resultado5)

//Agora a pessoa coletou as 800 moedas so que nao pegou a estrela

moedasColetadas = 800

//A pessoa nao coletou o item necessario para concluir a missao

itemColetados = " 0 estrelas "

// o resultado da conclusão com a verificação da pessoa

let resultado6 = (moedasColetadas === 800) && (itemColetados === " 1 estrelas ")

//Agora vai mostrar na tela se a pessoa concluiu ou nao a missao

console.log(" a missao foi concluida? " + resultado6)

//isso e o AND as duas perguntas tem que ser verdadeiras a pessoa tem que ter obrigatoriamente os 2 itens as 2 coisas pra poder permitir

// por exemplo se e dia e esta chovendo quero que algo aconteça que os npc pega o guarda chuva

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

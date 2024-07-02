
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//vamos declarar uma variavel como um interruptor de luz quando vc aperta ele liga e quando aperta denovo ele desliga para explicar melhor sobre o if e a explicao logo abaixo

let Ligado = false

if(Ligado){
    console.log("executou o comando")
}

//voce percebeu que o comando nao foi executado pois ele so executa se o arquivo estiver dando true(verdadeiro) agora ai embaixo o comando vai ser executado pois agora esta dando true

Ligado = true
if(Ligado){
    console.log("executou o comando")
}

//tudo que esta dentro do IF nao vai ser executado ate a expressao foi verdadeira como o exemplo abaixo vai dar verdadeiro tbm

if(1 === 1){
    console.log("o comando foi executado")
}
//para que o conteudo o comando que tiver dentro do if seja executado ele precisa dar como verdadeiro seja uma expressao ou uma variavel
//por exemplo se falar pra tu ir no supermercado porem so vai comprar o leite se estiver os ovos vou dar um exemplo no codigo abaixo

let PossuiOvos = false

let ItensComprados = ""

if(PossuiOvos){
    ItensComprados = "Leite"
}

//Esse comando ele vai ser executado nao importa como se ele vai passar ou nao pelo if o console ja a variavel itenscomprados vai passar pelo IF
console.log(" item comprados: " + ItensComprados)

//voce viu que nao apareceu o "leite" pois la em cima PossuiOvos esta como false(falso) entao o comando leite nao vai aparecer

PossuiOvos = true
ItensComprados = ""

if(PossuiOvos){
    ItensComprados = "Leite"
}

//Agora vai aparecer "Leite" pois o comando PossuiOvos esta true(verdadeiro)
console.log(" item comprados: " + ItensComprados)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

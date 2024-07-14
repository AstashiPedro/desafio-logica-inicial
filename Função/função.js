
// essa é a função da geladeira pra aumentar a potencia e gelar
/*function geladeira (){
    console.log("Fazendo gelo")
}
function potencia(){
    console.log("Aumentando potencia....")
    console.log("Potencia aumentada gelando mais rapido")
}
*/

//agora para chamar a função dentro da função e possivel dessa meneira colcando a "funcao"()

geladeira()

function geladeira (){
    console.log("Fazendo gelo")
    potencia()
}
function potencia(){
    console.log("Aumentando potencia....")
    console.log("Potencia aumentada gelando mais rapido")
}
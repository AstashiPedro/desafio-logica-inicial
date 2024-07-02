
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Agora o else ele e o se nao se algo deu false ou negativo ele vai passar para o comando debaixo se algo deu positivo ele executa o primeiro comando por exemplo ai embaixo

PossuiOvos = false
ItensComprados = ""

if(PossuiOvos){
    ItensComprados = "Leite"
}
else{
    console.log(" Passou na sessão de congelados ")
    ItensComprados = " Lasanha "
}

console.log(" Itens comprados:" + ItensComprados)

//e posso usar dessa forma colocando dentro da variavel como o exemplo de itens comprados que deu false pois possuiovos coloquei como false entao ele foi pro comando de baixo

//o if nao precisa necesssariamente de else ele se executa mesmo sem precisar de um else igual o comando acima ele ignorou a parte de cima escrita "Leite" e passou direto pra "lasanha" e o outro comando isso que e o else o if ele so executa aquele comando se algo for true "verdadeiro" algo "positivo"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

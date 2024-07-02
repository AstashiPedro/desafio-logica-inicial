
//Pontos de fome automatico comendo automaticamente

let PontosFome = 0

switch(PontosFome){
  case 0:
    console.log(" Voce não está com Fome: " + PontosFome)
break
  case 4:
    console.log(" Voce está com Pouca Fome: " + PontosFome)
    for(PontosFome = 4; PontosFome > 0; PontosFome--){
    console.log("Comendo...." + PontosFome)
    }
    console.log("Voce Não está com Fome: " + PontosFome)
break
  case 3:
    console.log("Voce está com Muita Fome: " + PontosFome)
    for(PontosFome === 3; PontosFome > 0; PontosFome--){
    console.log("Comendo...." + PontosFome)
    }
    console.log("Voce Não está com Fome: " + PontosFome)
break
  case 2:
    console.log(" Voce Está Morrendo de Fome está se Digerindo: " + PontosFome)
    for(PontosFome === 2; PontosFome > 0; PontosFome--){
    console.log("Comendo...." + PontosFome)
    }
    console.log("Voce Não está com Fome: " + PontosFome)
break
  case 1:
    console.log(" Voce está Morrendo Urgente Coma Algo está se Digerindo Rapído: " + PontosFome)
    for(PontosFome === 1; PontosFome > 0; PontosFome--){
    console.log("Comendo...." + PontosFome)
    }
    console.log("Voce Não está com Fome: " + PontosFome)
break
  default:
  console.log("Voce Morreu de Fome: " + PontosFome)
}
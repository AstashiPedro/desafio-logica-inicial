
let PontosFome = 100

switch(PontosFome){
  case 0:
    console.log(" Voce Não está com Fome: " + PontosFome)
break
  case 4:
    console.log(" Voce está com Pouca Fome: " + PontosFome)
  while (PontosFome > 0) {
    console.log("Comendo...." + PontosFome)
    PontosFome--
  }
  console.log("Voce Não está com Fome: " + PontosFome)
break
  case 3:
    console.log("Voce está com Muita Fome: " + PontosFome)
  while (PontosFome > 0) {
    console.log("Comendo...." + PontosFome)
    PontosFome--
  }
  console.log("Voce Não está com Fome: " + PontosFome)
break
  case 2:
    console.log("Voce está Morrendo de Fome está se Digerindo: " + PontosFome)
  while(PontosFome > 0) {
    console.log("Comendo...." + PontosFome)
    PontosFome--
  }
  console.log("Voce Não está com Fome: " + PontosFome)
break
  case 1:
    console.log("Voce está Morrendo de Fome Urgente Coma Algo está se Digerindo Rápido: " + PontosFome)
  while(PontosFome > 0) {
    console.log("Comendo...." + PontosFome)
    PontosFome--
  }
  console.log("Voce Não está mais com Fome: " + PontosFome)
break
   default:
console.log("Voce Morreu de Fome: " + PontosFome)
}
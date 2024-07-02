
let PontosFome = 100

switch (PontosFome) {
  case 0:
    console.log("Voce não está com Fome: " + PontosFome)
break
  case 4:
    console.log("Voce está com Pouca Fome: " + PontosFome)
    do {
      console.log("Comendo...." + PontosFome)
      PontosFome--
    } while (PontosFome > 0)
      console.log("Voce Não está com Fome: " + PontosFome)
break
  case 3:
    console.log("Voce está com Muita Fome: " + PontosFome)
    do {
      console.log("Comendo...." + PontosFome)
      PontosFome--
    } while (PontosFome > 0)
      console.log("Voce Não está com Fome: " + PontosFome)
break
  case 2:
    console.log("Voce está Morrendo de Fome está se Digerindo: " + PontosFome)
    do {
      console.log("Comendo...." + PontosFome)
      PontosFome--
    } while(PontosFome > 0)
      console.log("Voce Não está com Fome: " + PontosFome)
break
  case 1:
    console.log("Voce está MORRENDO URGENTE COMA ALGO está se DIGERINDO RAPIDO : " + PontosFome)
    do {
      console.log("Comendo...." + PontosFome)
      PontosFome--
    } while(PontosFome > 0)
      console.log("Voce Não está com Fome: " + PontosFome)
 break
  default:
  console.log("Voce Morreu de Fome: " + PontosFome)
}

let Vida = 2

switch(Vida) {
  case 0:
    console.log(" Voce Morreu: " + Vida)
break
  case 4:
    console.log("Vida Baixa Usar Ervas: " + Vida)
    for(Vida = 4; Vida < 5; Vida++){
      console.log("Usando Erva...." + Vida)
    }
    console.log("Voce está Vivo: " + Vida)
break
  case 3:
    console.log(" Vida Baixa Recupere Mais Rapido: " + Vida)
    for(Vida === 3; Vida < 5; Vida++){
      console.log("Usando Erva...." + Vida)
    }
    console.log("Voce está Vivo: " + Vida)
break
  case 2:
    console.log(" VOCE ESTÁ MORRENDO Recupere Muito Mais Rapído: " + Vida)
    for(Vida === 2; Vida < 5; Vida++){
      console.log("Usando Erva...." + Vida)
    }
    console.log("Voce está Vivo: " + Vida)
break
  case 1:
    console.log(" Voce ESTÁ MORRENDO MAIS UM DANO MORRE RECUPERE URGENTE A VIDA: " + Vida)
    for(Vida === 1; Vida < 5; Vida++){
      console.log("Usando Erva...." + Vida)
    }
    console.log("Voce está Vivo: " + Vida)
break
default:
    console.log("Voce está Vivo: " + Vida)
}
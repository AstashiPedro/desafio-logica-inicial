
let Vida = 

switch (Vida) {
  case 0:
    console.log("Voce Morreu: " + Vida)
break
  case 4:
    console.log("Vida Baixa Usar Ervas: " + Vida)
    while(Vida < 5) {
      console.log("Usando Erva...." + Vida)
      Vida++
    }
      console.log("Voce está Vivo: " + Vida)
break
  case 3:
    console.log("Vida Baixa Recupere Mais Rapido" + Vida)
    while(Vida < 5) {
      console.log("Usando Erva...." + Vida)
      Vida++
    }
      console.log("Voce está Vivo: " + Vida)
break
  case 2:
    console.log("Voce está MORRENDO Recuper3 Muito Mais Rapido" + Vida)
    while(Vida < 5) {
      console.log("Usando Erva...." + Vida)
      Vida++
    }
      console.log("Voce está Vivo" + Vida)
break
  case 1:
    console.log("Voce ESTA MORRENDO MAIS UM DANO MORRE RECUPERE URGENTE A VIDA: " + Vida)
    while(Vida < 5) {
      console.log("Usando Erva...." + Vida)
      Vida++
    }
      console.log("Voce está Vivo: " + Vida)
break
default:
console.log("Voce está Vivo: " + Vida)
}
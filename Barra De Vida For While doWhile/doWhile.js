
let Vida = 1

switch (Vida) {
  case 0:
    console.log("Voce Morreu: " + Vida)
break
  case 4:
    console.log("Vida Baixa Usar Erva")
    do {
      console.log("Usando Erva...." + Vida)
      Vida++
    } while (Vida < 4)
      console.log("Voce está Vivo: " + Vida)
break
  case 3:
    console.log("Vida Baixa Recupere Mais Rapido")
    do{
      console.log("Usando Erva...." + Vida)
      Vida++
    } while (Vida < 4)
      console.log("Voce está Vivo: " + Vida)
break
  case 2:
    console.log("Voce está MORRENDO Recupere Um Pouco Mais Rapido")
    do{
      console.log("Usando Erva...." + Vida)
      Vida++
    } while (Vida < 4)
      console.log("Voce está Vivo: " + Vida)
  case 1:
    console.log("Voce ESTÁ MORRENDO MAIS UM DANO MORRE RECUPERE URGENTE A VIDA: " + Vida)
    do{
      console.log("Usando Erva...." + Vida)
      Vida++
    } while (Vida < 4)
      console.log("Voce está Vivo: " + Vida)
default:
console.log("Voce está Vivo" + Vida)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//o default e muito parecido com else se nao tiver nenhuma fruta declarada no comando abaixo ou qulquer coisa ele vai executar o default 

let fruta2 = "Abacate"

if(fruta2 === "Laranja"){
    console.log(fruta2 +" Suco de Laranja")
}else if(fruta2 === "Banana"){
    console.log(fruta2 + " Vitamina de Banana")
}else if (fruta2 === "Uva"){
    console.log(fruta2 +" Suco de Uva")
}else if (fruta2 === "Limão"){
    console.log(fruta2 + " Limonada")
}else if (fruta2 === "Tomate"){
    console.log(fruta2 + " Massa de Tomate")
}else if (fruta2 === "Manga"){
    console.log(fruta2 + " Suco de Manga")
}else if (fruta2 === "Pitaya"){
    console.log(fruta2 + " Suco de Pitaya")
}else if (fruta2 === "Maça"){
    console.log(fruta2 +" Suco de Maça")
}else if (fruta2 === "Abacaxi"){
    console.log(fruta2 +" Suco de Abacaxi")
}else if (fruta2 === "Coco"){
    console.log(fruta2 + " Agua de Coco")
}else if (fruta2 === "Amora"){
    console.log(fruta2 + " Suco de Amora ")
}else if (fruta2 === " Ameixa "){
    console.log(" Suco de Ameixa ")
}else{
    console.log(fruta2 + " ESSA FRUTA NAO E MINHA PREFERIDA FORA DO MEU CARDAPIO")
}

//esse exemplo acima e do if agora o exemplo abaixo vai ser do switch sao bem parecidos

let fruta = "Abacate"

switch (fruta){
    case "Laranja":
    console.log(fruta + " Suco de Laranja")
break
    case "Banana":
        console.log(fruta + " Vitamina de Banana")
break
            case "Uva":
                console.log(fruta +" Suco de Uva")
break
                    case "Tomate":
                        console.log(fruta + " Massa de Tomate")
break
                    case "Limão":
                        console.log(fruta + " Limonada")
break
                        case "Tomate":
                            console.log(fruta + " Massa de Tomate")
break
                                case "Manga":
                                    console.log(fruta + " Suco de Manga")
break
                                    case "Pitaya":
                                        console(fruta + " Suco de Pitaya")
break
                                        case "Maça":
                                            console.log(fruta + " Suco de Maça")
break
                                            case "Coco":
                                                console.log(fruta + " Agua de Coco")
                                                case "Abacaxi":
                                                console.log(fruta + " Suco de Abacaxi")
break
                                                case "Amora":
                                                    console.log("Suco de Amora")
break
                                                    case "Ameixa":
                                                        console.log("Suco de Ameixa")
break
                                                        case "Kiwi":
                                                            console.log("Suco de Kiwi")
break
                                                            case "Pessego":
                                                                console.log("Suco de Pessego")
break
                        default:
                            console.log(fruta + "ESSA FRUTA NAO E MINHA PREFERIDA FORA DO MEU CARDAPIO")
}

//a diferença e quase nula praticamente nada so e mais bonita esteticamente e mais curta e facil de entendimento

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

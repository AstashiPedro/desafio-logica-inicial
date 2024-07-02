
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//o comando switch ele e usado como se fosse um if so que ele nao fica todo bagunçado igual ao if e else como o exemplo abaixo que e if e um logo bem mais abaixo e um switch

//e no if sempre tem que colocar a variavel varias vezes fruta2=== isso leva muito tempo e varias linhas de codigo

let fruta2 = "Banana"

if(fruta2 === "Laranja"){
    console.log("Suco de Laranja")
}else if(fruta2 === "Banana"){
    console.log("Vitamina de banana")
}else if (fruta2 === "Melancia"){
    console.log("Suco de Melancia")
}else if (fruta2 === "Uva"){
    console.log("Suco de Uva")
}else if (fruta2 === "Limão"){
    console.log("Limonada")
}else if (fruta2 === "Abacate"){
    console.log("Vitamina de Abacate")
}

//viu tao grande fica usando o if e else e tudo bagunçado entao pra esse caso de varias coisas seria bom usar o switch case

//aqui criamos uma variavel banana

let fruta = ""

//agora usaremos o switch como o if

switch (fruta){
    case "Laranja":
    console.log("Suco de Laranja")

    case "Banana":
        console.log("Vitamina de Banana")

        case "Melancia":
            console.log("Suco de Melancia")

            case "Uva":
                console.log("Suco de Uva")

                case "Abacate":
                    console.log("Vitamina de Abacate")

                    case "Limão":
                        console.log("Limonada")
}
//O comando case significa caso seja isso vai executar isso em baixo caso nao seja pula

//A aula continua na proxima parte Break 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

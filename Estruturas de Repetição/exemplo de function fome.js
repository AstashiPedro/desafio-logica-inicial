let PontosDeFome = 

function fome() {
    PontosDeFome--
    console.log("VOCE NAO ESTA COM FOME :" + PontosDeFome)
}
function fome2(){
    console.log("Comendo...")
    PontosDeFome--
    console.log("VOCE ESTA COM POUCA FOME :" + PontosDeFome)
    console.log("Comendo...")
    PontosDeFome--
    console.log("VOCE NAO ESTA COM FOME :" + PontosDeFome)
}
function fome3() {
    fome2()
    console.log("Comendo...")
    PontosDeFome--
    console.log("VOCE NAO ESTA COM FOME :" + PontosDeFome)
}


    switch(PontosDeFome){
        case 0:
            console.log("VOCE NAO ESTA COM FOME : " + PontosDeFome)
    break
        case 1:
            console.log("VOCE ESTA COM POUCA FOME : " + PontosDeFome)
            console.log("Comendo...")
            fome()   
    break
        case 2:
            console.log(" VOCE ESTA COM MUITA FOME : " + PontosDeFome)
            fome2()
    break
        case 3:
             console.log(" VOCE ESTA MORRENDO DE FOME ESTA SE DIGERINDO :" + PontosDeFome)
             fome3()
    break
    default:
        console.log(" VOCE MORREU DE FOME : " + PontosDeFome)
    }




/*
let PontosDeFome = 3

switch(PontosDeFome){
    case 0:
        console.log("VOCE NAO ESTA COM FOME :" + PontosDeFome)
break
        case 1:
            console.log("VOCE ESTA COM POUCA FOME :" + PontosDeFome)
break
            case 2:
                console.log(" VOCE ESTA COM MUITA FOME :" + PontosDeFome)
break
                case 3:
                    console.log(" VOCE ESTA MORRENDO DE FOME ESTA SE DIGERINDO :" + PontosDeFome)
break
default:
    console.log(" VOCE MORREU DE FOME :" + PontosDeFome)
}

while (PontosDeFome <= 3) {
    console.log("VOCE ESTA SE ALIMENTANDO :" + PontosDeFome)
    PontosDeFome--
    PontosDeFome--
    PontosDeFome--
}
*/
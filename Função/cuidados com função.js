
//evitar de colocar numeros e espaços em nomes de função, função são ações

function Getdata(){
    //logica implementada
    console.log("Pegando dados do usúario")
    if(1 < 3){
        console.log("Numero encontrado")
    }
}

function CheckValue(){
    //checar valores de algo do banco
    console.log("Validando Dados....")
}

function sendToDatabase(){
    //enviar dados para a base de dados
    console.log("Cadastrando Dados....")
}

//cada função tem q fazer a mesma função com o q o nome condiz
//ou se quiser pode colocar apenas uma função para tudo que chama todas as outras funções

function mainSaveData(){
    Getdata()
    CheckValue()
    sendToDatabase()
}

mainSaveData()
4
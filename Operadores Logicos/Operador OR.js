
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Agora vamos pra um exemplo de or vou criar um jogo nesse jogo tem um personagem chamado ichigo kurosaki ele so pode sair de casa com as roupas de shinigami ou com a ajuda da rukia com o comando abaixo

//Esse OR e representado como (||) clicando na tecla (Shift esquerdo) + (barra de \ perto do Z)

//Aqui e o amuleto que o ichigo usa pra virar shinigami ele esta com o amuleto

let Shinigami = "amuleto"

//Aqui e a ajuda dele a rukia ele esta com ela ali

let ajuda = "rukia"

//Vai dar verdadeiro pois o ichigo o item sem amuleto e diferente de amuleto sim eles sao diferentes true e rukia e igual a rukia esta com ele entao e verdadeiro

let podeSair = (Shinigami !== "sem amuleto") || (ajuda === "rukia")

//!== significa diferente || significa ou se ela tem esse outro item e permitido do mesmo jeito mesmo sem o outro item

//Aqui so joguei na cara se e o ichigo pode sair de casa

console.log(" o ichigo pode sair de casa? " + podeSair)

//Agora o ichigo esta sem o amuleto so que ele esta ainda com a ajuda da rukia

Shinigami = " sem amuleto "

//Agora o ichigo esta sem o amuleto

podeSair = (Shinigami !== "sem amuleto") || (ajuda === "rukia")

//aqui esta dando verdadeiro pois a rukia esta com ele para ajudar so que ele esta sem amuleto e la ta perguntando !== sem amuleto e diferente de sem amuleto? nao eles nao sao diferente entao e false (falso) nesse caso ja a rukia e true (verdadeiro)

console.log(" o ichigo pode sair de casa? " + podeSair)

//Agora vou fazer o ichigo ficar sem o amuleto e sem a ajuda da rukia

Shinigami = "sem amuleto"

ajuda = "sem rukia"

podeSair = (Shinigami !== "sem amuleto") || (ajuda === "rukia")

//Aqui esta dando falso pois o ichigo esta sem o amuleto para ajudar e ele esta sem a rukia para a ajudar entao ele nao pode sair de casa

console.log("o ichigo pode sair de casa? " + podeSair)

//Aprendemos que uma ou outra condição precisa ser obrigatoriamente verdadeiro se nao vai dar errado esta bloqueado para pessoa entrar ou o personagem poder sair

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

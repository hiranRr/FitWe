//////////// homebar Função
console.log("busque comer cimento")

var objBar = document.getElementById("id_homeBar")
var booll = true


function a1(){
    document.getElementById("id_homeBar").style.display = "inline"
    booll = false
}
function a2(){
    document.getElementById("id_homeBar").style.display = "none"
    booll = true
}




function btnMenuBar(){
    if(booll === true){
        a1()
    }

    else if(booll === false){
        a2()
    }
}



var bools = true
function clicaPoST(){
    if(bools === true){

        document.getElementById("1").style.display = "none"
        bools = false
        console.log("oi")
    }

    else if(bools === false){
        document.getElementById("1").style.display = "block"
        bools = true
        console.log("oii")
    }
}


//area pagina Index.html {local onde a gente clica nas imagem e muda :) }




var img_1 = "../assets/imagens/pag2_01.jpg"
var img_2 = "../assets/imagens/pag2_02.jpg"
var img_3 = "../assets/imagens/pag2_03.jpg"
var objt_m = document.getElementById("imagens_p2")
var num = 1

setInterval(function() {
    avancar()
}, 4000);



function situacao(){
    if (num <= 0){
        objt_m.src = img_3
        num = 3

    }
    if (num == 1){
        objt_m.src = img_1
        document.getElementById("textoP2s").innerHTML = "Se torne um novo alguém, busque seu melhor com a gente"

    }
    if (num == 2){
        objt_m.src = img_2
        document.getElementById("textoP2s").innerHTML = "busque novas motivações, teste seus limites em nossa rede social"

    }
    if (num == 3){
        objt_m.src = img_3
        document.getElementById("textoP2s").innerHTML = "se conecte com pessoas que pensam como você"

    }
    if (num >= 4){
        num = 1
        objt_m.src = img_1
        document.getElementById("textoP2s").innerHTML = "Se torne um novo alguém, busque seu melhor com a gente"
    }
}
function auto(){
    
}

function avancar(){
    num++
    situacao()
}
function voltar(){
    num = num - 1
    situacao()
}

///////////chat/////////





var contagemBase = 1
var contagemBase2 = 1


function botMsg(){

    var caixaDeTextos = [
        "Gente, só eu que fico com fome demais depois do treino?",
        "Hoje fiz um treino full body, agora tô morta, mas valeu a pena!",
        "Aquele momento maravilhoso quando você percebe que está conseguindo fazer mais repetições do que antes",
        "Acho que hoje não vou conseguir fazer cardio, o treino de musculação foi bem puxado",
        "Nunca vou entender como é que eu amo e odeio a academia ao mesmo tempo",
        "Eu e meu pós-treino estamos ficando mais próximos a cada dia",
        "Aquele queima de gordura na barriga só aparece depois de muitos treinos e paciência",
        "Alguém aí já tentou treino em circuito? Acho que vou experimentar semana que vem",
        "O difícil é sair de casa, depois que você começa o treino tudo flui",
        "Meu personal me fez aumentar o peso no agachamento, agora o corpo tá pedindo arrego",
        "Acabei de fazer meu melhor tempo no cardio, será que vou manter?",
        "Amo ver o progresso no espelho, mas o que me motiva mesmo é sentir a força no treino",
        "Hoje fui de abdominal direto, não aguento mais olhar pra barriga, preciso dar uma atenção extra",
        "Acho que vou fazer um treino de costas e bíceps, mas sempre fico em dúvida se foco mais na força ou na hipertrofia",
        "Poderia viver de whey e carboidrato pós-treino, quem mais?",
        "Finalmente consegui fazer 10 flexões seguidas, não é nada comparado ao pessoal, mas tô feliz",
        "Aquela sensação maravilhosa de queimar calorias, mas ainda assim querer comer pizza no final do dia",
        "Amanhã vou tentar fazer mais uma série de levantamento terra, quero ver se consigo fazer 80kg",
        "Será que tô treinando errado, porque meu corpo não tá tão definido como eu gostaria?",
        "Ontem fiz o treino de pernas e hoje estou pagando o preço, mas sei que vale a pena!"
    ]
    var random = Math.floor(Math.random() * caixaDeTextos.length);

    var datent = new Date();
    var plr2 = document.getElementById("base2")
    var chat = document.getElementById("chatAreaI")


    var msg = //pra fazer algo pra caixa de textow entrar


    clonadoplr2 = plr2.cloneNode(true)

    clonadoplr2.id = "base_1_" + contagemBase2++;

    var colections2 = clonadoplr2.children;


    colections2[0].innerHTML  = caixaDeTextos[random]
    colections2[1].innerHTML = datent.getHours() + ":" + datent.getMinutes()

    chat.appendChild(clonadoplr2)


}




function clonar(){
    var daten = new Date();
    var plr1 = document.getElementById("base1")
    var chat = document.getElementById("chatAreaI")


    var msg = document.getElementById("valorinho").value
    console.log(msg)


    clonadoplr = plr1.cloneNode(true)

    clonadoplr.id = "base_1_" + contagemBase++;

    var colections = clonadoplr.children;


    colections[0].innerHTML  = msg
    colections[1].innerHTML = daten.getHours() + ":" + daten.getMinutes()





    if(msg == "pterosauro"){
        document.getElementById("pete").style.display = "block"
        
    }
    if(msg == ""){
        console.log("erro, refaça a mensagem")
    }

    else{
        chat.appendChild(clonadoplr)
        document.getElementById("valorinho").value = ""
        botMsg()

    }

}






///////////chat/////////
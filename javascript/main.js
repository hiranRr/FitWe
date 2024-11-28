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


function clonar(){
    var daten = new Date();
    var plr1 = document.getElementById("base1")
    var chat = document.getElementById("chatAreaI")


    var msg = document.getElementById("valorinho").value
    console.log(msg)


    clonadoplr = plr1.cloneNode(true)

    clonadoplr.id = "base_1_" + contagemBase++;

    var colections = clonadoplr.children;


    var texto = colections
    


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
    }

}



///////////chat/////////
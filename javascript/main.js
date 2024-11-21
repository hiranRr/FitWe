//////////// homebar Função


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




//area pagina Index.html {local onde a gente clica nas imagem e muda :) }




var img_1 = "../assets/imagens/pag2_01.jpg"
var img_2 = "../assets/imagens/pag2_02.jpg"
var img_3 = "../assets/imagens/pag2_03.jpg"
var objt_m = document.getElementById("imagens_p2")
var txt_Ed = document.getElementById("textoP2s").value
var num = 1

setInterval(function() {
    avancar()
}, 4000);

setInterval(function() {
    iniciar()
}, 1000);


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

function iniciar(){
    var ba = document.getElementById("videoMaster")
    ba.play()
}

///////////
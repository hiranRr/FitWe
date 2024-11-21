var objBar = document.getElementById("id_homeBar")
var booll = 1
function btnMenuBar(){

    if(booll == 1){
        document.getElementById("id_homeBar").style.display = "inline"
        console.log("Oi")
        booll++
        console.log(booll)
    }

    if(booll == 2){
        objBar.style.display = "none"
        console.log("Oi2")
        booll = 0
        console.log(booll)


}
}


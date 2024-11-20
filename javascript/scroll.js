var numC = 1


function coordsSet(){
    if(numC == 1){
        window.scrollBy(0,0)
        console.log("parte1")
        numC++
    }
    if(numC == 2){
        window.scrollBy(0,600)
        console.log("parte2")
        numC++
    }

    if(numC == 3){
        numC = 0
    }


}

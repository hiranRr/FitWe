let btn = document.querySelector('verConfirmSenha')
let btnConfirm = document.querySelector('Senha2')

let nome = document.getElementById('Nome');
let nomeTXT = document.getElementById('Nome');
let validN = false;

let email = document.getElementById('Email');
let emailTXT = document.getElementById('Email');
let validE = false;

let senha = document.getElementById('Senha');
let senhaTXT = document.getElementById('Senha');
let validS = false;

let senha2 = document.getElementById('Senha2');
let senha2TXT = document.getElementById('Senha2');
let validSS = false;

let telefone = document.getElementById('Telefone');
let telefoneXT = document.getElementById('Telefone');
let validSS = false;

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4){
        nomeTXT.innerHTML = "Nome *  Falta 5 digitos"
        nomeTXT.style.color = "red"
        nomeTXT.style.fontSize = "0.9em"
        nome.setAttribute('style','Border-color:red')
        validN = false
    }
    if(nome.value.length >= 5){
        nomeTXT.innerHTML = "Nome"
        nomeTXT.style.color = "green"
        nomeTXT.style.fontSize = "1em"
        nome.setAttribute('style','Border-color:green')
        validN = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
        emailTXT.innerHTML = "Email *  Falta 5 digitos"
        emailTXT.style.color = "red"
        emailTXT.style.fontSize = "0.9em"
        email.setAttribute('style','Border-color:red')
        validE = false;
    }
    if(email.value.length >= 5){
        emailTXT.innerHTML = "Email"
        emailTXT.style.color = "green"
        emailTXT.style.fontSize = "1em"
        email.setAttribute('style','Border-color:green')
        validE = true;
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7 ){
        senhaTXT.innerHTML = "Senha *  Falta 5 digitos"
        senhaTXT.style.color = "red"
        senhaTXT.style.fontSize = "0.9em"
        senha.setAttribute('style','Border-color:red')
        validS = false;

    }
    else if (!/[A-Z]/.test(senha.value)){
        senhaTXT.innerHTML = "Senha *  coloque um caracter Maiusculo"
        senhaTXT.style.color = "red"
        senhaTXT.style.fontSize = "0.9em"
        senha.setAttribute('style','Border-color:red')
        validS = false;
    }

    else if (!/[1-9]/.test(senha.value)){
        senhaTXT.innerHTML = "Senha *  coloque um numero"
        senhaTXT.style.color = "red"
        senhaTXT.style.fontSize = "0.9em"
        senha.setAttribute('style','Border-color:red')
        validS = false;
    }
    else if (!/[\W_]/.test(senha.value)){
        senhaTXT.innerHTML = "Senha *  coloque um caracter especial"
        senhaTXT.style.color = "red"
        senhaTXT.style.fontSize = "0.9em"
        senha.setAttribute('style','Border-color:red')
        validS = false;
    }
    else{
        senhaTXT.innerHTML = "Senha"
        senhaTXT.style.color = "green"
        senhaTXT.style.fontSize = "1em"
        senha.setAttribute('style','Border-color:green')
        validS = true;
    }

})

senha2.addEventListener('keyup', () => {
    if(senha2.value.length <= 4){
        senha2TXT.innerHTML = "Senha *  Falta 5 digitos"
        senha2TXT.style.color = "red"
        senha2TXT.style.fontSize = "0.9em"
        senha2.setAttribute('style','Border-color:red')
        validSS = false;
    }
    else if (!/[A-Z]/.test(senha2.value)){
        senha2TXT.innerHTML = "Senha *  coloque 1 Caracter Maiusculo"
        senha2TXT.style.color = "red"
        senha2TXT.style.fontSize = "0.9em"
        senha2.setAttribute('style','Border-color:red')
        validSS = false;
    }
    else if (!/[1-9]/.test(senha2.value)){
        senha2TXT.innerHTML = "Senha *  coloque 1 NUMERO"
        senha2TXT.style.color = "red"
        senha2TXT.style.fontSize = "0.9em"
        senha2.setAttribute('style','Border-color:red')
        validSS = false;
    }
    else if (!/[\W_]/.test(senha2.value)){
        senha2TXT.innerHTML = "Senha *  coloque 1 Caracter especial"
        senha2TXT.style.color = "red"
        senha2TXT.style.fontSize = "0.9em"
        senha2.setAttribute('style','Border-color:red')
        validSS = false;
    }
    else{
        senha2TXT.innerHTML = "Senha"
        senha2TXT.style.color = "green"
        senha2TXT.style.fontSize = "1em"
        senha2.setAttribute('style','Border-color:green')
        validSS = true;

    }
})

function aoclicar(){
    const botao = document.getElementById('btn2');
    botao.style.backgroundColor = 'rgba(41, 163, 37, 0.459)';

}



function aoclicarFalso(){
    const botao = document.getElementById('btn2');
    botao.style.backgroundColor = 'transparent';

}


function verificSenha(){
    if(validN== true && validE== true && validS== true && validSS == true){
        var ids = document.getElementById("idS")
        ids.innerHTML = "situação:tudo correto"
        aoclicar()

        let listaUser = JSON.parse(localStorage.getItem['listaUser'] || '[]')
        let senhaCript = CryptoJS.SHA512(senha.value).toString()
        listaUser.push({
            nomeC: nome.value,
            emailC: email.value,
            senhaC: senhaCript

        })
        var batata = JSON.stringify(listaUser)
        localStorage.setItem('listaUser', JSON.stringify(listaUser))


    }

    else{
        var ids = document.getElementById("idS")
        aoclicarFalso()
        ids.innerHTML = "situação:algo está de errado"
    }


}

function clica(){
    verificSenha()
}


function mostrarSenha(){

        document.getElementById('L-senha').type = 'text'
        document.getElementById('L-senha2').type = 'text'
        bol = false
}



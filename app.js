let numeroSecreto=0
let intentos=0
let numeroMaximo=10
let lista=[]

function numeroSecret(){
    let generadorDeNumeroSecreto= Math.floor(Math.random()*10)+1
    console.log(generadorDeNumeroSecreto)
    console.log(lista)
    if(lista.length==numeroMaximo){
        textos("p","lo siento ya sorteamos todos los numeros")
    }else{
        if(lista.includes(generadorDeNumeroSecreto)){
            return numeroSecret()
        }else{
            lista.push(generadorDeNumeroSecreto)
            return generadorDeNumeroSecreto
        }
    }
}

function textos(parametro,texto){
    let generador=document.querySelector(parametro);
    generador.innerHTML=texto 
}
condicionales()

function condicionales(){
    textos("h1","juego de adivinar numero");
    textos("p",`ingrese un numero del uno al ${numeroMaximo}`);
    intentos=1
    numeroSecreto=numeroSecret()
    limpiarCaja()
    document.querySelector("#reiniciar").setAttribute("disabled","true")
}
function verificarIntento(){
    let numeroUser=document.getElementById("numeroUser").value
    if(numeroSecreto==numeroUser){
        textos("P",`felicidades el numero secreto era ${numeroSecreto} y lo acertaste en ${intentos} ${intentos==1?"intentos":"intentos"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled")
        limpiarCaja()
    }else{
        if(numeroSecreto>numeroUser){
            textos("p","el numero es mayor")
        }else{
            textos("p","el numero es menor")
        }
        limpiarCaja()
        intentos++;
    }
}
function limpiarCaja(){
    document.querySelector("#numeroUser").value="";
}
function reiniciarJuego(){
    condicionales();
    limpiarCaja()
}


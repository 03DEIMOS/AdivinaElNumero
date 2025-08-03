let numeroMaximo = 10;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroSecreto);
    
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('P', `Acertaste el número en ${intentos} ${intentos == 1 ? 'intento': 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
         }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        limpiarFormulario();
        intentos++;
    }
    return;
}   

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles!');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarFormulario(){
    let textBoxNumero = document.querySelector('#numeroUsuario');
    textBoxNumero.value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);

    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarFormulario();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

limpiarFormulario();
condicionesIniciales();
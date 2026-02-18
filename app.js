let numeroSecreto = 0;
 let intentos = 0;
 let listaNumerosSorteados = [];
 let numeroMaximo = 10;

 console.log(numeroSecreto)
 
function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseint(document.getElementById('valorUsuario').value);
    /** console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
     console.log(typeof(numeroSecreto));
     console.log(numeroUsuario);
     console.log(numeroUsuario === numeroSecreto);**/
    if (numeroUsuario === numeroSecreto){
                asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)?'vez': 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
        //El usuario no acerto.
         if (numeroUsuario > numeroSecreto){
                asignarTextoElemento('p','El numero secreto es menor');
         }else{
                asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
     return;

}

function limpiarCaja(){
  /**let valorCaja = document.querySelector('#valorUsuario')
   valorCaja.value = ''; opcion 1
   opcion 2 **/
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
         asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta incluido en la lista
    else(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero entre el 1 ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje 
    // generar el numero aleatorio
    // inicializar el numero de intento
    condicionesIniciales();
    // desabilitar el boton de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('diseabled','true');
}
//va hacer que funcione correctamente los bloques
condicionesIniciales();




let numeroSecreto = 0;
 let intentos = 0;
 let listaNumerosSorteados = [];
 numeroMaximo = 10;

 console.log(numeroSecreto)
 
function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof(numeroUsuario));
    //console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroUsuario);
    // console.log(numeroUsuario === numeroSecreto);
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
  /* let valorCaja = document.querySelector('#valorUsuario')
   valorCaja.value = ''; opcion 1*/
   /**opcion 2 */
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
    if(listaNumerosSorteados.includes(numeroGenerado)){
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












/***********************************************************************/
/**
 *Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */


/***********************************************************************/

/**
 * 
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 */
/***********************************************************************/
/**
1.Crea una lista vacía llamada "listaGenerica".
2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
5.Crea una función que calcule el promedio de los elementos en una lista de números.
6.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
6.Crea una función que devuelva la suma de todos los elementos en una lista.
7.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
8.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
9.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */
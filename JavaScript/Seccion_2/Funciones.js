/******  FUNCIONES  ******/

/*
    Sintaxis
        Palabra reservada (Function (F. Declarativa) var (F. de Expresión)).
        Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        Parentesis () donde se indican los parametros.
        Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;
*/


//Declarativas
function mifuncion(){
    return "Hola Me llamo Diego"
}
console.log( mifuncion() );


//Funciones de Expresion (Anonimas)
var mifuncion2 = function(a){
    return  a ;
}
console.log( mifuncion2(100) );


/*--- Ejemplos ---*/

//Funcion para generar un mensaje predeterminado con una parte personalizada

function saludar(nombre){
    return (`Hola, me llamo ${nombre}, y estoy aprendiendo JavaScript `);
}

console.log(saludar("Luzvelia"));


//Ejemplo 2
let fondos = 1000;
function retiroDeDinero(cantidad){
    fondos = fondos - cantidad; 
    if (fondos <= 0) {
        console.log(`La cantidad supera los fondos`);
    }else{
        return `Retiraste ${cantidad}, tu saldo restante es ${fondos}`;
    }    
}

console.log(retiroDeDinero(230));
console.log(retiroDeDinero(100));
console.log(retiroDeDinero(270));
console.log(retiroDeDinero(60));



//Practica 1:
// En una funcion, elabora la logica de un cajero automatico que retorne un mensaje de fondo insuficiente
// cuanto el saldo sea menor o igual a 0

// practica 2:
// Elabora una funcion que compare 2 numeros y retorne si es par o impar
// tip: usar %

// practica 3:
// Elabora una funcion sin parametros que retorne si la multiplicacion de 3 x 1260
// es par o impar.

// practica 4:
// Crea una funcion que reciba los parametros:
// nombre1, nombre2, apellido, edad, sexo, pais ingresados mediante propmt,
// los compare y retorne si son identicos.
// en caso de ser identicos, solicitar un apellido y mostrar el mensaje:
// Hola, Me llamo (nombre)(apellido), soy (sexo), tengo (edad) años, y vivo en (pais).
// Si los nombres no coinciden, retornar, Los nombres deben ser identicos, intentalo nuevamente.
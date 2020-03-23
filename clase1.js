/*
 DECALRACIÓN DE VARIABLES Y MANIPULACIÓN DE LAS MISMAS
    AUTOR: José Agustín Rios
    USO PERSONAL
*/

//Las variables se declaran con var, pero es recomendable declaralas con let y const
var Normal = "Esta variable se usa normalmente"
let Local = "Esta variable solo se encuentra dentro de un scope local"
const Constante = "Esta Variable es constante, no deberia de modificarse"

var nombre = "Agustin" , apellido = "Rios"
    //Se puede declarar dos variables usando solamente una coma ","

var nombreEnMayus = nombre.toUpperCase() //RESULTADO: nombreEnMayus = "AGUSTIN"
    //La función toUpperCase sirve para poder la variable "nombre" en mayùscula

var apellidoEnMinus = apellido.toLowerCase() //RESULTADO: apellidoEnMinus = "rios"
    //La función .toLowerCase hace lo contrario a la función anterior, convierte "apellido" a minusculas

var primeraletra = nombre.charAt (0) //RESULTADO: primeraletra = "A"
    //La función .charAt() sirve para tomar una letra de un string, toma un indice como paràmetro

var qletrasName = nombre.length //RESULTADO: qletrasName = 7
    //Esta función devuelve la cantidad de caracteres dentro del string

var nombrecompleto = `${nombre} ${apellido.toUpperCase()}` //RESULTADO: nombrecompleto = "Agustin RIOS"
    //A partir de ES6 se usa la comilla invertida para "sumar" strings y los mismos se colocan con ${esta} sintaxis
        //El equivalente a esto es la siguiente linea:

            //var nombrecompleto = nombre + " " + apellido

                      //aún asì deberias de definir una variable aparte para convertir el valor "apellido" a mayùsculas

var str = nombre.substr (1, 2) //RESULTADO : str= 'gu'
    //.substr() toma una porción solamente de un string, puede ser útil para filtrar algún valor de un string muy largo
    var StringEjemplo= "AgustínRios18"
        var name = StringEjemplo.substr (0, 7) //R: Agustin
        var surname = StringEjemplo.substr (7, 4) //R: Rios
        var age = StringEjemplo.substr (11, 2) //R: 18
        console.log(`El nombre del sujeto es ${name} su apellido ${surname} y su edad ${age} años`);
        // Incluso se podrian meter estos datos dentro de objetos y arrays para darle mucha más utilidad

/*
DOCUMENTACIÓN:
.toLowerCase():  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase
.toUpperCase():  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toUpperCase
.length():       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/length
.chartAt():      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt
.substr():       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr
*/
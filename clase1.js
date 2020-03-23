//Las variables se declaran con var, pero es recomendable declaralas con let

var nombre = "Agustin", apellido = "Rios"
    //Se puede declarar dos variables usando solamente una coma

var nombreEnMayus = nombre.toUpperCase() 
    //La función toUpperCase sirve para poder la variable "nombre" en mayùscula

var apellidoEnMinus = apellido.toLowerCase() 
    //La función .toLowerCase hace lo contrario a la función anterior, convierte "apellido" a minusculas

var primeraletra = nombre.charAt (0)
    //La función .charAt() sirve para tomar una letra de un string, toma un indice como paràmetro

var qletrasName = nombre.length
    //Esta función devuelve la cantidad de caracteres dentro del string

var nombrecompleto = `${nombre} ${apellido.toUpperCase()}`
    //A partir de ES6 se usa la comilla invertida para "sumar" strings y los mismos se colocan con ${esta} sintaxis
        //El equivalente a esto es la siguiente linea:

            //var nombrecompleto = nombre + " " + apellido
            
                      //aún asì deberias de definir una variable aparte para convertir el valor "apellido" a mayùsculas

var str = nombre.substr (1, 2)
    //

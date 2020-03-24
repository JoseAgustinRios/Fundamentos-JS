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
    //Una simple función para obtener cualquier frase en mayúscula
    function upper(frase) {
        console.log(frase.toUpperCase());
             }

var apellidoEnMinus = apellido.toLowerCase() //RESULTADO: apellidoEnMinus = "rios"
    //La función .toLowerCase hace lo contrario a la función anterior, convierte "apellido" a minusculas
    //Una simple función para obtener cualquier frase en minúscula
    function lower(frase) {
        console.log(frase.toLowerCase());
             }
    
var qletrasName = nombre.length //RESULTADO: qletrasName = 7
    //Esta función devuelve la cantidad de caracteres dentro del string

var primeraletra = nombre.charAt (0) //RESULTADO: primeraletra = "A"
    //La función .charAt() sirve para tomar una letra de un string, toma un indice como paràmetro
    
    /*DESAFIO:
    Imprimir en pantalla la ultima letra de cualquier palabra
    */
        //Como declaración de variable
        var ultl= nombre.charAt (qletrasName-1)

        //Como Funcion (Se verá mas adelante)
        function UltimaLetra (string) {
            let letra = string.charAt(string.length -1)
            console.log(`La ultima Letra es :${letra}`);         
        }
        //A simple vista podrá parecer que es más larga la segunda forma, pero crear una función permite que
        //tome cualquier valor y además lo imprima en la consola *vease console.log()

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



// DESAFIO: CREAR UNA FUNCIÓN QUE COLOQUE LA PRIMER LETRA DE CUALQUIER FRASE EN MAYÚSCULA
const TxtMuestra ='lOrEm IpSuM DoLoR SiT.'

function convertidor(texto) {
    let convrtm = texto.toLowerCase();
    let priLetra = convrtm.charAt(0);
    let convrtM = priLetra.toUpperCase()
    let restoTxt = convrtm.substr(1,9999)
    console.log(`Su frase convertida es: ${convrtM}${restoTxt}`);
    
}
convertidor()










/*
DOCUMENTACIÓN:
.toLowerCase():  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase
.toUpperCase():  https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toUpperCase
.length():       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/length
.chartAt():      https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt
.substr():       https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr
*/
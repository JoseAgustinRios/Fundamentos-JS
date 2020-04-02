/*
 MANIPULACION DE VARIABLES con MATEMATICAS
    AUTOR: José Agustín Rios
    USO PERSONAL
*/
//En Js se pueden realizar todas las operaciones matemáticas
const x = 1
const y = 1
var Suma = x + y            //2
var Resta = x - y           //0
var multiplicación = x*y    //1
var divisiòn = x/y          //1
//Además de todo esto se puede sumar una variable asi misma usando las siguientes expresiones que son equivalentes
var x = x++
var x =+ x
var x = x+

var edad = 18
//edad = edad + 1
edad += 1
var peso = 70
peso -= 2
var sandiwich = 5
peso += sandiwich
var jugar = 0.5
peso -= jugar
var precioDeVino = 200.141526
var total = Math.round(precioDeVino * 100 * 3) / 100
var totalstr = total.toFixed(4)
var total2 = parseFloat(totalstr)
var pizza = 10 * 10
var persona = 2

//Lo que hay a continuación es una función que se tornó muy compleja pero aún tiene valor conservarla
/* En resumen la función sirve para calcular el precio, la cantidad de pizzas y lo que le corresponde pagar a cada uno
los parametros que se deben de pasar a la función son:
Cantidad de personas: Qppl
Cantidad de porciones de pizza por persona: Qpxp
Precio de cada pizza: Price
Y por último el tipo de pizza es decir, la cantidad de porciones por pizza: Tipo
*/
function CalcPizza(Qppl, Qpxp, Price, Tipo) {
    
    if (Qppl === 0 || Qpxp === 0 || Price === 0 || Tipo === 0 
        ||Qppl === NaN || Qpxp === NaN || Price === NaN || Tipo === NaN) {
        console.log(`Alguno de los valores es incorrecto`);
        
    } //El if-else sirve simplemente para los casos en los que los usuarios introducen valores incorrectos
    else {
        let QPizzas = (Qpxp / Tipo) * Qppl
      
        function redondeo(x, precision) // La función que viene a continuación es necesario adjuntarle una documentación al final
        {
            var y = +x + (precision === undefined ? 0.5 : precision/2);
            return y - (y % (precision === undefined ? 1 : +precision));
        }
        let QPizzasF = redondeo (QPizzas, 1.9999999999999999999) 
        let Total = (QPizzasF * Price).toFixed(2)
        let TotalxPpl = Total/Qppl
        console.log(`Deben comprarse ${QPizzasF.toFixed(0)} Pizzas y nos va costar $${Total}
        Costando $${TotalxPpl.toFixed(2)} por cada uno`);
        
    } 
    
    
}
/*
DOCUMENTACIÓN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators //SE RECOMIENDA MUCHO LEER ESTO DA MUCHA INFORMACION ADICIONAL




*/
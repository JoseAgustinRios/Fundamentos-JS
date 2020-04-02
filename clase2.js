/*
 MANIPULACION DE VARIABLES MATEMATICAS
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



function CalcPizza(Qppl, Qpxp, Price, Tipo) {
    
    if (Qppl === 0 || Qpxp === 0 || Price === 0 || Tipo === 0 
        ||Qppl === NaN || Qpxp === NaN || Price === NaN || Tipo === NaN) {
        console.log(`Alguno de los valores es incorrecto`);
        
    } else {
        let QPizzas = (Qpxp / Tipo) * Qppl
      
        function redondeo(x, precision) {
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
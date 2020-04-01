/*
 MANIPULACION DE VARIABLES MATEMATICAS
    AUTOR: José Agustín Rios
    USO PERSONAL
*/
//En Js se pueden realizar todas las operaciones matemáticas
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





var PrecioPizza = 120
var PersonasPresentes = Grupo1 + Grupo2
var PizzasCompradas = PersonasPresentes / 0.75 
var Total = PrecioPizza * PizzasCompradas
var TotalxPersona =  0




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
var total = Math.round(precioDeVino *100*3)/100
var totalstr = total.toFixed(4)
var total2 = parseFloat(totalstr)


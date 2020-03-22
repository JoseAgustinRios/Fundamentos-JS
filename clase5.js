var agus = {
  nombre: 'Agustin',
  apellido: 'Rios',
  edad: 18
}
// function imprimirNombreEnMayusculas({nombre}) {
//   var nombre = nombre.toUpperCase()
//   console.log(nombre);
// }

imprimirNombreEnMayusculas(agus)
imprimirNombreEnMayusculas ({nombre: 'Pepito'})

// function imprimirNombreEnMayusculas(persona) {
//   var nombre = persona.nombre.toUpperCase()
//   console.log(nombre);
// }

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var {nombre} = persona
  console.log(nombre.toUpperCase());
}
function imprimirNombreYEdad(persona) {
  var {nombre, edad} = persona
  console.log(`Hola me llamo ${nombre}, y tengo ${edad} años`);
}
imprimirNombreYEdad (agus) // acordarse de llamar a la funcion


// function cumpleaños(persona) {
//   persona.edad += 1
// }
function cumpleaños(persona) {
return {
  ...persona,
  edad: persona.edad + 1
  }
}

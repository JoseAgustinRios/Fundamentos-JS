var agus = {
  name: 'Agustin',
  apellido: 'Rios',
  edad: 18
}
// function imprimirnameEnMayusculas({name}) {
//   var name = name.toUpperCase()
//   console.log(name);
// }

imprimirnameEnMayusculas(agus)
imprimirnameEnMayusculas ({name: 'Pepito'})

// function imprimirnameEnMayusculas(persona) {
//   var name = persona.name.toUpperCase()
//   console.log(name);
// }

function imprimirnameEnMayusculas(persona) {
  //var name = persona.name
  var {name} = persona
  console.log(name.toUpperCase());
}
function imprimirnameYEdad(persona) {
  var {name, edad} = persona
  console.log(`Hola me llamo ${name}, y tengo ${edad} años`);
}
imprimirnameYEdad (agus) // acordarse de llamar a la funcion


// function cumpleaños(persona) {
//   persona.edad += 1
// }
function cumpleaños(persona) {
return {
  ...persona,
  edad: persona.edad + 1
  }
}

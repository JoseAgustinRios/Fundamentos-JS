var agus = {
  name:'Agustin',
  apellido: 'Rios',
  altura: 1.90,
}
var pepe = {
  name:'Jose',
  apellido: 'Joestar',
  altura: 1.95,
}

var jojo = {
  name:'Joseph',
  apellido: 'Joestar',
  altura: 1.91,
}

var giogio = {
  name:'Giorno',
  apellido: 'Giovanna',
  altura: 1.89,
}

var jolyne = {
  name:'Jolyne',
  apellido: 'Kujo',
  altura: 1.88,
}

var dio = {
  name:'Dio',
  apellido: 'Brando',
  altura: 2,
}
 var personas = [agus,pepe,jojo,giogio,jolyne,dio]

for (var i = 0; i < personas.length; i++) {
var persona = personas[i]
  console.log(`${persona.name} ${persona.apellido} mide ${persona.altura} mts`);
}

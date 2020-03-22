var agus = {
  nombre:'Agustin',
  apellido: 'Rios',
  altura: 1.90,
}
var pepe = {
  nombre:'Jose',
  apellido: 'Joestar',
  altura: 1.95,
}

var jojo = {
  nombre:'Joseph',
  apellido: 'Joestar',
  altura: 1.91,
}

var giogio = {
  nombre:'Giorno',
  apellido: 'Giovanna',
  altura: 1.89,
}

var jolyne = {
  nombre:'Jolyne',
  apellido: 'Kujo',
  altura: 1.88,
}

var dio = {
  nombre:'Dio',
  apellido: 'Brando',
  altura: 2,
}
 var personas = [agus,pepe,jojo,giogio,jolyne,dio]

for (var i = 0; i < personas.length; i++) {
var persona = personas[i]
  console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura} mts`);
}

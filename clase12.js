var persona = {
  nombre: 'Agustin',
  apellido: 'Rios',
  edad: '18',
  ingeniero: false,
  gamer: true,
  student: true,
  dj: true,

}
function imprimirProfesiones(persona) {
console.log(`${persona.nombre} es:`)
if (persona.ingeniero) {
  console.log ('ingeniero')
  }
}
if (persona.gamer) {
  console.log ('gamer')
  }

if (persona.student) {
  console.log ('student')
  }

if (persona.ingeniero) {
  console.log ('dj')
}
imprimirProfesiones(persona)

var agus = {
  nombre: 'Agustin',
  apellido: 'Rios',
  edad: 18,
  peso: 70
}
console.log(`Al inicio del año ${agus.nombre} pesa ${agus.peso}kg`);
const INCREMENTO_PESO = 0.2
const aumentarpeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarpeso = persona => persona.peso -=  INCREMENTO_PESO
const DIAS_DEL_AÑO = 365
const META = agus.peso - 3
const comeMucho = () => Math.random() <  0.3
const realizadeporte = () => Math.random() <  0.4

var dias = 0
while (agus.peso > META) {
  if(comeMucho()){
 aumentarpeso (agus)
  }
  if(realizadeporte()){
    adelgazarpeso(agus)
  }
  dias += 1
}

console.log(`la meta es ${META}`);
console.log(`Pasaron ${dias}`);
if (dias > 365){
  agus.edad += 1
  console.log(`Ahora Agus tiene ${agus.edad}`);
}

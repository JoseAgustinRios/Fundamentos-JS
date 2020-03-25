var agus = {
  name: 'Agustin',
  apellido: 'Rios',
  edad: 18,
  peso: 70
}
console.log(`Al inicio del año ${agus.name} pesa ${agus.peso}kg`);
const INCREMENTO_PESO = 0.2
const aumentarpeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarpeso = persona => persona.peso -=  INCREMENTO_PESO
const DIAS_DEL_AÑO = 1000
for (i = 1; i <=DIAS_DEL_AÑO; i++){
  var random = Math.random ()
  if (random < 0.25){
aumentarpeso (agus)
   //aumenta de peso
 } else if (random < 0.5){
adelgazarpeso (agus) //adelgazar
 }
}
console.log(`Al final del año ${agus.name} pesa ${agus.peso.toFixed(1)}`);

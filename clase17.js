function Persona(name, apellido) {
  this.name = name
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.name} ${this.apellido}`)
};

var agus = new Persona('Agustin','Rios')
var erika = new Persona  ('Erika', 'Luna')

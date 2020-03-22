class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar (fn) {
        var { nombre, apellido } = this
      console.log(`Hola, me llamo ${nombre} ${apellido}`)
      if (fn) {
        fn (nombre,apellido, null)
      }
  }
  soyAlto () {
      return this.altura > 1.8
  }
}
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
super(nombre, apellido, altura)
  }


  saludar (fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn (nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Sos Dev!`);

  }
}



var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)
 sacha.saludar(responderSaludo)
 erika.saludar(responderSaludo)
 arturo.saludar(responderSaludo)

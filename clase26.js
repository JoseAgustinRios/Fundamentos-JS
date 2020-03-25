class Persona {
  constructor(name, apellido, altura) {
    this.name = name
    this.apellido = apellido
    this.altura = altura
  }
  saludar (fn) {
        var { name, apellido } = this
      console.log(`Hola, me llamo ${name} ${apellido}`)
      if (fn) {
        fn (name,apellido, null)
      }
  }
  soyAlto () {
      return this.altura > 1.8
  }
}
class Desarrollador extends Persona {
  constructor(name, apellido, altura) {
super(name, apellido, altura)
  }


  saludar (fn) {
    var { name, apellido } = this
    console.log(`Hola, me llamo ${name} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn (name, apellido, true)
    }
  }
}

function responderSaludo(name, apellido, esDev) {
  console.log(`Buen día ${name} ${apellido}`);
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

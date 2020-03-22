const API_URL = 'https://swapi.co/api/'//aca llamamos a la pagina api
const PEOPLE_URL = 'people/:id'//aca seleccionamos la persona en la pagina puedes mirar que tambien puedes seleccionar otra cosa como planets o starship

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 50)}`//aca seleccionamos la persona en este caso es peopple3
const opts = { crossDomain: true }//este sirve para intercambiar datos entre dos paginas

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy, ${persona.name}`)//aca colocamos eye_color puedes elegir otra cosa name gender etc  mira en la api se muestra en la pagina
}

$.get(lukeUrl, opts, onPeopleResponse) //traemos la funcion con jquery https://api.jquery.com/jQuery.get/ aca puedes mirar la documentacion en este caso es el succes

/*
 DECLARATION OF VARIABLES AND HANDLING THEM
    AUTHOR: José Agustín Rios
    PERSONAL USE
*/

// Variables are declared with var, but it is recommended to declare them with let and const
var Normal = "This variable is used normally"
let Local = "This variable is only found within a local scope"
const Constant = "This Variable is constant, it cannot be modified"

var name = "John", lastname = "Doe"
    // You can declare two variables using only a comma ","

var nameInMayus = name.toUpperCase () // RESULT: nameInMayus = "AGUSTIN"
    // The function toUpperCase is used to be able to capitalize the variable "name"
    // A simple function to get any capitalized phrase
    function upper (phrase) {
        console.log (phrase.toUpperCase ());
             }

var surnameInMinus = surname.toLowerCase () // RESULT: surnameInMinus = "rivers"
    // The .toLowerCase function does the opposite of the previous function, converts "last name" to lowercase
    // A simple function to get any lowercase phrase
    function lower (phrase) {
        console.log (phrase.toLowerCase ());
             }
    
var qlettersName = name.length // RESULT: qlettersName = 7
    // This function returns the number of characters inside the string

var firstletter = name.charAt (0) // RESULT: firstletter = "A"
    // The .charAt () function is used to take a letter from a string, it takes an index as a parameter
    
    /*CHALLENGE:
    Print the last letter of any word on the screen
    */
        // As a variable declaration
        var ultl = name.charAt (qlettersName-1)

        // How it works (It will be seen later)
        function LastLetter (string) {
            let letter = string.charAt (string.length -1)
            console.log (`The last letter is: $ {letter}`);
        }
        // At first glance it may seem that the second form is longer, but creating a function allows
        // take any value and also print it to the console * see console.log ()

var fullname = `$ {firstname} $ {lastname.toUpperCase ()}` // RESULT: fullname = "John DOE"
    // Starting with ES6 the backtick (``) is used to "add" strings and they are placed with $ {this} syntax
        // The equivalent of this is the following line:

            // var fullname = firstname + "" + lastname

                      // you should still need to define a separate variable to convert the "last name" value to uppercase

var str = name.substr (1, 2) // RESULT: str = 'oh'
    //. substr () takes only a portion of a string, it can be useful to filter some value of a very long string
    var StringEjemplo = "AgustínRios18"
        var name = ExampleString.substr (0, 7) // R: Agustin
        var surname = StringExample.substr (7, 4) // R: Rios
        var age = ExampleString.substr (11, 2) // R: 18
        console.log (`Subject's name is $ {name} his last name $ {surname} and his age $ {age} years`);
        // You could even put this data inside objects and arrays to make it much more useful



// CHALLENGE: CREATE A FUNCTION THAT PLACES THE FIRST LETTER OF ANY SENTENCE IN CAPITAL LETTER
const SampleTxt = 'lOrEm IpSuM DoLoR SiT.'

function converter (text) {
    let convrtm = text.toLowerCase ();
    let priLetra = convrtm.charAt (0);
    let convrtM = priLetra.toUpperCase ()
    let restoTxt = convrtm.substr (1,9999)
    console.log (`Your converted phrase is: $ {convrtM} $ {restoTxt}`);
    
}
converter()










/*
DOCUMENTATION:
.toLowerCase (): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toLowerCase
.toUpperCase (): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/toUpperCase
.length (): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/length
.chartAt (): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charAt
.substr (): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr
*/
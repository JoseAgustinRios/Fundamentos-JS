//Simple module for convert phrases to an ordered way
//Decomment your lang
//Default: EN

function convertidor(text) {
    let convrtm = text.toLowerCase();
    let frLett = convrtm.charAt(0);
    let convrtM = frLett.toUpperCase();
    let restTxt = convrtm.substr(1,9999);
    console.log(`Your converted phrase is: ${convrtM}${restoTxt}`);
    // console.log(`Su frase convertida es: ${convrtM}${restoTxt}`);
    // console.log(`Sua frase convertida é: ${convrtM}${restoTxt}`);
    // console.log(`Sa phrase convertie est: ${convrtM}${restoTxt}`);
    }
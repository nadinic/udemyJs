'use strict'

var edad = 24;
var imprime = "";

switch(true){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
        break;
    case (edad >= 19 && edad <= 28):
        imprime = "sos adulto";
        break;
    case (edad >= 29 && edad <= 40):    
        imprime = "tu edad es neutra";
        break;
    case (edad <= 41):
        imprime = "sos viejo";    

    default:
        imprime = "chupala voludo"
}

console.log(imprime)
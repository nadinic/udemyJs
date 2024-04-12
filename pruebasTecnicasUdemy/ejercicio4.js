
/*
dado una cadena de texto, dar la vuelta e invertir el orden 

*/
var array = "";

function invertir(cadena){

    for(var i= cadena.length -1; i>=0  ; i--){
        array+= cadena[i];      

    } 
   return array;

}

console.log(invertir("hola soy la cadena a invertir"));  //undefined
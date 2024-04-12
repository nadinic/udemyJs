/*
 dada una palabra, buscarla en una frase y devolver cuantas veces aparece 
 la palabra en la frase, estas 2 deben ser parametros para funcion

*/


function buscarYcontar(frase,palabra){

    var contador=0; //variable que va a llevar el conteo
    var frase = frase.toLowerCase();//convertir las dos primer
    var palabra = palabra.toLowerCase();
    var array = frase.split(/\W+/); //convertir la frase en un array separado por los espacios
    
    for(var i = 0; i< array.length ;i++){//recorrer el array
        if (array[i] == palabra) {
            contador++; //si encuentra la palabra aumenta el contador
        }

    }

    if (contador > 0){
            return `la palabra ${palabra}, se repite ${contador} veces`;
        
    }else{
        return "La palabra no existe en la frase";
    }

}


console.log(buscarYcontar("la mantis, Mantis, Mantis se bajo de mi regazo","mantis"));
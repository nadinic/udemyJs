/*
dado un numero entero , inviertelo y devuelve el numero entero

*/

function invertirNumero (numero){

    // var  reversed = numero.toString( ).split('').reverse().join('');
    //  return parseInt(reversed);
    let strNumerito=numero.toString();

    var resultado = 0 ;

    for(let i = strNumerito.length -1; i >=0; i--) {
        resultado+=strNumerito[i];

    }

    resultado = parseInt(resultado);
    
   return  resultado;

 

}

console.log(invertirNumero(12345));
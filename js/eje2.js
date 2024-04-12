'use strict'

/*

*/

var suma =0;
var contador =0;



do{

    var numero = parseInt(prompt("introdusca un numero:"+(contador+1)));

    
      //Pedir al usuario que introduzca el número.

      if (isNaN(numero)){
        numero = 0;
      }
    suma += numero;
    console.log("suma:"+suma)
    console.log("numero:"+numero)
                                   //Convertir la entrada a número y sumarla a "suma".
    contador++;                                //Incrementamos

}while(numero >=0)

alert("la media de todos los numeros es"+(numero/contador))
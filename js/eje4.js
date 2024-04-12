'use strict'
//mostrar numeros impares entre dos numeros


var numero1 = parseInt(prompt("ingrese numero1: "))

var numero2 = parseInt(prompt("ingrese numero2: "))

do{

   
    numero1++;
    if(numero1 == numero2){
        break;
    }

    if(numero1%2 != 0){
        document.write(`${numero1} <br>`);

    }
    

}while(numero1 < numero2)
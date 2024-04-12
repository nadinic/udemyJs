'use strict'

var numero1 = parseInt(prompt("ingrese numero1: "))

var numero2 = parseInt(prompt("ingrese numero2: "))

// var suma = 0;
// var contador = 0;
document.write(`<h1>del numero ${numero1} al numero ${numero2} estan toods estos numeros</h1>`)


do{

   
    numero1++;
    if(numero1 == numero2){
        break;
    }
    document.write(`${numero1} <br>`);

}while(numero1 < numero2)


// for(let i = numero1; i < numero2; i++){
//     document.write(`${i} <br>`);

// }
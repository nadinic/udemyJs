'use strict'


var numero1 = parseInt(prompt("ingrese numero: "))

var contador = 1;


while(contador != numero1){

    if(numero1%contador == 0) {

        document.write(`el numero ${numero1} es divisible por ${contador} <br>`);


}
    contador++;

};


// for(let i = 1; i != numero1; i++){
//     if(numero1%i == 0) {

//         document.write(`el numero ${numero1} es divisible por ${i} <br>`);
// }


// };
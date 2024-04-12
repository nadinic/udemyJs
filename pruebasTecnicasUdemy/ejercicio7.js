/*
dado dos numeros,devolver cuantos numerosImpares hay entre ellos
*/


function countImpares(numero1,numero2){

   if(numero1 >= numero2){
    return "numeros ingresados incorrectamente"
   }

    var cont = 0;

    for(let i = numero1+1; i <numero2 ;i++){

        if(i % 2 != 0){
            cont++;
        }

    }

    return `entre el numero ${numero1} y el numero ${numero2} hay  ${cont} impares`;

}


console.log(countImpares(1,90));
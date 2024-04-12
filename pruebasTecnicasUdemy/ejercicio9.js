/*
dados doa array, devolver array con solo los elementos comunes entre estos

*/

var array1 = ["pablo","osa","pedro","juan"];
var array2 = ["pedro","juan","danny","daniel","constanza"];
var array3 = [];


function elementosComunes(array1,array2){

    for(var i = 0; i < array1.length ;i++){
        if(array2.includes(array1[i]) ){
            // array3+= array1[i];
            array3.push(array1[i]);
        }
    }

    return array3;
}

console.log(elementosComunes(array1,array2));
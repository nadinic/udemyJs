 /*
iterando un array una vez encuentra el numero MAYOR y MENOR


 */


var numeros = [5,7,8,3,66,78,23,1];

function mayorYmenor(numeros){
    var mayor = numeros[0];
    var menor = numeros[0];

    for(var i = 0; i<= numeros.length; i++){

        if(numeros[i] >= mayor){
            mayor = numeros[i];
        }else if(numeros[i] <= menor) {
            menor = numeros[i];
        }
    
    }
     return `el numero mayor es ${mayor}, y el numero menor es ${menor}`
}

console.log(mayorYmenor(numeros)) 


    


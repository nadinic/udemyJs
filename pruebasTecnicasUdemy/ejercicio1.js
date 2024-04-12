/*
    Dado un numero, devovler su tabla de multiplicar completa

*/

function  tablaMultiplicar(numero){
let resultado = "# Tabla del "+numero+"# \n";

   
    for (var i = 1; i <= 10;i++){

        var multiplicacion = numero*i;
        
        // console.log( `${numero} * ${i} = ${multiplicacion}`);

        resultado += `${numero} * ${i} = ${multiplicacion}\n`;

    }

    return resultado;
}

console.log(tablaMultiplicar(2));
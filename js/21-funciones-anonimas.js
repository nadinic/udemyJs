'use strict'

//funcion anonima es una funcion que no tiene nombre

function sumame (numero1,numero2,sumaYmuestra,sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


sumame(5,7,(dato) =>{
    console.log("la suma es: "+dato)   
}, function(dato){
    console.log("el doble de la suma es: " + dato*2);
})


var funcion = ()=>{
    return console.log("funcion flecha");
}

funcion();
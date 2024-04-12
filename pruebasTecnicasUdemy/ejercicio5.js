/*
cual es el x por ciento de este numero

*/


function  calcularXPorcentaje(porcentaje,numero){
    var resultado =  (numero * porcentaje/100) ;
    return `el ${porcentaje}% de ${numero} es = ${resultado}`;
}

console.log(calcularXPorcentaje(43,897));
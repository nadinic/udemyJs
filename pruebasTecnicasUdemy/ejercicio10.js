/*

Dado un numero, mostrar una escalera con escalones de "[-]"
usando el numero para los niveles de la escalera
*/


function escalera(escalones){
    var escalera = "";
    var  escalon = "[-]";

    for(var i = 0; i<= escalones;i++){
        escalera+=(escalon.repeat(i)+"\n");
    }
    return escalera;
}


console.log(escalera(5));
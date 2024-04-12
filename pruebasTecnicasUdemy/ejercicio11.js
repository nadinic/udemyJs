/*

Dado un texto y una busqueda,censurar todas las coincidencias
de la busqueda en el texto con [-CENSURADO-]

Si el texto o busqueda estan vacios mostrar:
"no puedes leer el texto y la busqueda" en el caso de que amnos patametros no lleguen
*/


function  censuraTexto(texto,busqueda){

    var censurado = "[-CENSURADO-]";

    var texto_array = texto.split(/\W+/); //convertir a array para poder rec

    for(var i = 0; i < texto_array.length;i++){

        if(texto_array[i] == busqueda)
        texto_array[i]= censurado ;

    }

    return texto_array.join( "" );//volver a convertir a string


}

console.log(censuraTexto( "Hola como estas", "como"));
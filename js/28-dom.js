'use strict'

//document object model DOM


function cambiaColor(color){
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
//conseguir elemento con un ID concreto

var caja = document.querySelector("#micaja"); //selecciona el primer elemento que coincida con la condicion (id)
//conseguir elemento por su etiqueta}

var todosDiv = document.getElementsByTagName("div") //se usa para conseguir con el TAG

var valor;
console.log(todosDiv);

// for(valor in  todosDiv) {

//     var parrafo = document.createElement("p");
//     var texto = document.createTextNode(todosDiv[valor].textContent);
//     parrafo.append(texto);
//     document.querySelector("#miseccion").appendChild(parrafo);

// }



    


var contenidoTexto = todosDiv[3] //contenido de texto del div 2
                                 //no agarra con [0]debido a que el primer div tiene una ejecucion aca #micaja                       
    contenidoTexto.innerHTML= "Hola Mundo";
    contenidoTexto.style.color = "purple"
console.log (contenidoTexto);// se ve solo el texto del div
console.log(todosDiv[1]) //se ve todo el div
//conseguir elemento por su clase



//al igual que en css con # para selecionar elementos con id,
// y con un . elementos con class, y nada para las etiquetas

//cambiar un elemento  del html por otro
caja.innerHTML = "este es un nuevo texto";
caja.style.background = "yellow";
caja.style.padding = "20px";
// caja.style.color = "brown"
caja.className = "hola";

// // console.log(caja)
// console.log(todosDiv)

var divRojos = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");
divAmarillo[0].style.background = "orange";

for(var div in divRojos){
    
    if(divRojos[div] .className == "rojo"){
        divRojos[div].style.background = "red";

    }

}

//query Selector para cosas en expecifico, para selecionar mas de uno es mejor el classname

var id = document.querySelector("#encabezado");

console.log(id)

var clase = document.querySelector("div.rojo");
console.log(clase);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
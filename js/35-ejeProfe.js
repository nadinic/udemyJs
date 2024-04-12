'use strict'
var formulario = document.querySelector("#formularioPelicula");


formulario.addEventListener( "submit", function () {  

    console.log("entra a la funcion")
    
    var titulo = document.querySelector("#addpelicula").value;

if(titulo.trim().length >= 1){
    localStorage.setItem(titulo,titulo);

}

})

var ul = document.querySelector("#peliculasList");
for(var i in localStorage){
    // console.log(localStorage[i]);
    if(typeof(localStorage[i]) == 'string'){

        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);

    }
  
}



//borrar pelicula

var formulariob = document.querySelector("#formularioBorrarPelicula");


formulariob.addEventListener( "submit", function () {  

    console.log("entra a la funcion")
    
    var titulo = document.querySelector("#borrarpelicula").value;

if(titulo.trim().length >= 1){
    localStorage.removeItem(titulo);

}

})

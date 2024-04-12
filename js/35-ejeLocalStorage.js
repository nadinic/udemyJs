'use strict'

var peliculas = [];

window.addEventListener("load", function() {

   

    console.log("js cargado en dom")

    var  formulario = document.querySelector("#formularioPelicula");

    formulario.addEventListener("submit",()=>{

        console.log("submit capturado")

        var pelicula = document.querySelector("#addpelicula").value;

        if(pelicula.length == 0  ){

            
            alert( "Debe ingresar una película" );
            return false
        }else{

            peliculas.push(pelicula);
            console.log(peliculas)
            localStorage.setItem(pelicula,pelicula);

        }

    //     var ul = document.querySelector("#peliculasList");
    // for(var i in localStorage){
    //     if(typeof(localStorage[i]) == 'string'){

    //         var li = document.createElement('li');
    //         li.append(localStorage[i]);
    //         ul.append(li);
    
    //     }

    // }

    



    document.querySelector("#addpelicula").value = "";


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

    var  formulariob = document.querySelector("#formularioBorrarPelicula");

    formulariob.addEventListener("submit",()=>{

        console.log("submit borrado")

        var pelicula = document.querySelector("#borrarpelicula").value;

        if(pelicula.length == 0  ){

            
            alert( "Debe ingresar una película para borrar" );
            return false
        }else{

            peliculas.pop(pelicula);
            localStorage.removeItem(pelicula);

        }
 
        document.querySelector("#borrarpelicula").value = "";
    
})


})
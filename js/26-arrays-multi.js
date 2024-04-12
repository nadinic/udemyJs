'use strict'

//Arrays dentro de otros arrays = arrays multidimensionales

var categorias = ["accion","terror","comedia"];

var peliculas = ["zorro","vagina","batman","superman","aquaman"]

//sort() ordena de orden alfabetico
//reverse() orden inverso
console.log(peliculas.sort());
console.log(peliculas.reverse())

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// do{ 
//     var elemento = prompt("introuce tu pelicula")
//     if(elemento == "acabar"){
//         break;
//     }else{
//         peliculas.push(elemento);
//     }
//    }
// while(elemento != "acabar")

// peliculas.pop() //borra el ultimo elemento del array


//borrar un elemento del array en base a un indice

var indice = peliculas.indexOf("aquaman")
console.log(indice)

if(indice > -1){
    peliculas.splice(indice,1)
}
  


document.write("<h1>Lista de peliculas</h1>")
document.write("<ul>")
peliculas.forEach((elemento) =>{
    document.write(`<li>${elemento}</li>`);


})
document.write("</ul>")



var peliculas_string = peliculas.join();
console.log(peliculas_string);


//transformar texto a un array
var cadena = "texto1,texto2,texto3"
var cadena_array = cadena.split(",") 

console.log(cadena_array)
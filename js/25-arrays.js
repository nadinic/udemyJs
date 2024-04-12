'use strict'
//Arrays,Arreglos, Matricez, son una colecciond e datos que puede tener una variable
//los indices empiezan en 0
var nombre = "pablo nadinic";
var nombres = ["pedro robles","joaquin penka","eliza","oso","goku"];
var lenguajes = new Array("php","js","java","python","paskal","c++")


// console.log(nombres.length)
// console.log(nombres[0])
// console.log(lenguajes[2])

// var elemento = parseInt(prompt("que elemento dle array quieres",0))
// if( elemento >= nombres.length){

//     elemento = parseInt(prompt("ingrese un indice que exista que es "+nombres.length,0))

// }else{
//     alert("el elemento es "+nombres[elemento])

// }

// alert(nombres[elemento]);

document.write("<h1>Lenguajes de programacion</h1>")

document.write("<ul>")

// for(let i = 0; i < lenguajes.length; i++){
//     document.write("<li>"+lenguajes[i]+"</li>");
// }


//forEach itera en todo el array y nos lo muestra

// lenguajes.forEach((elemento,index,dato)=>{
//     console.log(dato)
//     document.write("<li>"+index+".-"+elemento+"</li>");
// })
//forIn

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");

}

document.write("</ul>")

//busqueda

// var busqueda = lenguajes.findIndex((lenguaje) =>{
//     return lenguaje == "js"
// })



var precios = [10,20,40,80,100]

var busqueda = precios.some(precio => precio < 100)

console.log(busqueda)
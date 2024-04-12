'use strict'

//Local Storage


//Comprobar disponibilidad del localStorage
if(typeof(Storage)!=="undefined"){

    console.log("local storage disponible")
}else{
    console.log("incompatible con localStorage")
}

// console.log(Storage)


//Guardar datos en localStorage

localStorage.setItem("titulo","Curso de js de victor")

//Recuperar Elemento

// console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

//guardar Objetos

var usuario = {
    nombre:"victor robles",
    email:"victor@gmail.com",
    web:"www.metallica.com"
}

localStorage.setItem("usuario",JSON.stringify(usuario));

//recuperar Objeto

var userjs =JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#datos").append(" "+userjs.web+" "+userjs.nombre);

//borrar datos

localStorage.removeItem("usuario");

localStorage.clear();
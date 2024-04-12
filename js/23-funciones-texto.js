'use strict'

//transformar texto

var numero = 44;
var texto1 = "bienvenido al curso de   JavaScript de pablo thrasher, JavaScript";
var texto2 = "ES UN MUY BUEN CURSO";

// var dato = numero.toString(); // transforma a string el número
//     dato = texto1.toUpperCase();
//     dato = texto2.toLowerCase();

// console.log(typeof dato);
// console.log(dato);

// var nombre = "pablo";
//     nombre = ["hola","chao","wena"]

// console.log(nombre.length); // calcula el numero de caracteres

// //concatenar es unir texto;

// var frase = texto1+ " "+texto2;
// console.log(frase);

var busqueda = texto1.indexOf("JavaScript"); //devuelve la posicion donde se encuentra
    busqueda = texto1.lastIndexOf("JavaScript"); // busca la palabra que este mas alfinal
    busqueda = texto1.search("curso");//parecido al index of, si da -1 el caracter no existe
    busqueda = texto1.match("curso");
    busqueda = texto1.substr(10,5);//saca una palabar de la posicion dada
    busqueda = texto1.charAt(43 );
    busqueda = texto1.startsWith("bi");// da true si el string empieza con eso
    busqueda = texto1.endsWith("JavaScript");// lo mismo pero alfinal
    busqueda = texto1.includes("jJavaScript");//busca en el string una palabra, cuidado que es keysensitive
    busqueda = texto1.replace("JavaScript","sinfonia");
    busqueda = texto1.slice(14);//devuelve el string pero desde parte de caracter 14
    busqueda = texto1.split(" ");//separa las palabras del string con un espacio
    busqueda = texto1.trim();//quita los espacios por delante y por detras del string, sirve para quitar lso espacios al pedir nombre de usuario
    

console.log(busqueda);  
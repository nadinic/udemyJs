/*
1-pida 6 numeros por pantalla y los meta en un array
2-mostrar el array entero (todos los elementos)en el cuerpo de la pagina y en la consola
3-ordenar y mostrarlo
4-invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valora el uso de funciones)
*/

// const numeros = [];

// for(let i = 0;i <6 ; i++){
//     let numero = parseInt(prompt(`ingrese numero: ${i+1}`));
//     numeros.push(numero);
//     document.write(numero + " <br>");
    
// }
// console.log(numeros)

// document.write("array ordenado <br>")
// document.write(numeros.sort()+ "<br>")

// document.write("array invertido <br>")
// document.write(numeros.reverse()+ "<br>")

function mostrarArray(elementos,textoCustom =""){

    document.write("<h1>Contenido del Array"+textoCustom+"</h1>");

    elementos.forEach((elemento)=>{

    document.write("<strong>"+elemento+"</strong> <br>");
   
})

}


var numeros = [];
//pedir 6 numeros
for (var i = 0;i <= 5;i++){
    // numeros[i] = parseInt(prompt('Ingrese un número',0));
    numeros.push(parseInt(prompt('Ingrese un número',0)));

}
//mostrar arreglo en consola
console.log(numeros)

mostrarArray(numeros);

numeros.sort((a,b)=> a-b);
mostrarArray(numeros," Ordenado");

numeros.reverse();
mostrarArray(numeros, " Reversa");

//cuantos ellemntos tiene un array

document.write("el array tiene:"+numeros.length+" elementos");

//busqueda por  indice

let busqueda = parseInt(prompt('busca un número',0))

document.write("posiciond e la busqueda:"+posicion+"<br>")

var posicion = numeros.findIndex(numero => numero == busqueda)

if (posicion && posicion != -1){
    document.write("<h1>Encontrado</h1>")
    document.write("<h1>posiciond e la busqueda:"+posicion+"<br></h1>")
    
}else{

    document.write("<h1>No Encontrado</h1>")
}


'use strict'

//json javascript object notation

var pelicula = {
    "titulo":'batman vs superman',
    "anio": 2017,
    "pais":'estados unidos'
}

var peliculas = [
    {"titulo":"la verdad duele",
    "anio":2014,
    "pais":'francia'},pelicula
]

pelicula.titulo = "superman ql penka"

console.log(peliculas)
var caja_peliculas = document.querySelector('#peliculas')
var index;
for(index in peliculas){

    var parrafo = document.createElement('p');
    parrafo.append(peliculas[index].titulo+"-"+peliculas[index].anio+"-"+peliculas[index].pais);
    caja_peliculas.append(parrafo);

}
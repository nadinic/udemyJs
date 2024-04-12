'use strict'

//REST Y SPREAD

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
    console.log("fruta1: "+fruta1);
    console.log("fruta2: "+fruta2);
    console.log(resto_de_frutas);


}


listadoFrutas("naranja","manzana","sandia","pera","melon","coco")

var frutas = ["naranja","manzana"]

listadoFrutas("sandia","pera","melon","coco",frutas[1])
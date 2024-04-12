'use strict'

//bom browser object model


function getBom(){
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(screen.width)
console.log(screen.height)
console.log(window.location.href)

}

function redirect(url){
    window.location.href = url;//abre la url

}

function abrirVentana(url){
    window.open(url,"",);//abre una nueva pestaña
    // window.open(url,"","wid=400,height=300");//abre un popup
}

getBom();
// redirect( "https://www.google.com" );


'use strict'


//eventos del raton

window.addEventListener('load', () =>{
    
function cambiarColor(){

    console.log("me has dado click")
    var bg = boton.style.background;
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc"
    

    if(bg =="green"){
        boton.style.background ="red";
        
       
    }else{
        boton.style.background= "green"
    }


    return true;

}

var boton = document.querySelector('#boton')

//evento click
boton.addEventListener('click',function(){
    cambiarColor();
    // boton.style.border = "10px solid black"
    console.log(this)
    this.style.border = "10px solid black"
});

//mouse over

boton.addEventListener( 'mouseover', function (){

    boton.style.background = "yellow"

})

//mouse out

boton.addEventListener( 'mouseout', function (){

    boton.style.background = "#ccc"

})

//focus

var input = document.querySelector( '#nombre' )

input.addEventListener( 'focus', function (){

   console.log("esta dentro del input")

})



//blur

input.addEventListener( 'blur', function (){

    console.log("estas fuera del input")
})


//keydown

input.addEventListener( 'keydown', function (event){

    console.log("[key down]pulsando tecla ",String.fromCharCode(event.keyCode));
})


//keypress

input.addEventListener( 'keypress', function (event){

    console.log("[key press]tecla presionada ",String.fromCharCode(event.keyCode));
})

//keyup

input.addEventListener( 'keyup', function (event){

    console.log("[key up]tecla soltada ",String.fromCharCode(event.keyCode));
})



}); //final del load


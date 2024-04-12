'strict'

window.addEventListener('load',()=>{




    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("set interval ejecutado")
            
            var encabezado = document.querySelector("h1")
            if( encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="20px";
    
            }else{
                encabezado.style.fontSize="50px"
    
            }
            
        },1000)

        return tiempo

    }
var tiempo = intervalo();
    //timers
    //el setTimeout solo se ejecuta una vez
    // var tiempo = setInterval(function(){
    //     console.log("set interval ejecutado")
        
    //     var encabezado = document.querySelector("h1")
    //     if( encabezado.style.fontSize=="50px"){
    //         encabezado.style.fontSize="20px";

    //     }else{
    //         encabezado.style.fontSize="50px"

    //     }
        
    // },1000)




    var stop = document.querySelector( "#stop" )
    stop.addEventListener("click", function(){
        alert("has parado el inetrvalo en bucle")
        clearInterval(tiempo);


    });


    var start = document.querySelector("#start");

    start.addEventListener("click",function(){
        alert("has inciaod el intervalo en bucle")
        intervalo();

    })

});
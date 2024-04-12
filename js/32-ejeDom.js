window.addEventListener('load',function(){
    console.log("dom cargado")



var formulario = document.querySelector('#formulario');
var box_dashed =document.querySelector('.dashed');
box_dashed.style.display = "none"

formulario.addEventListener( 'submit' , function () {
    console.log("evento sumbit capturado") 

   var nombre = document.querySelector('#nombre').value;
   var apellido = document.querySelector('#apellido').value;
   var edad = parseInt(document.querySelector("#edad").value);


   if(nombre.trim() == null || nombre.trim().length ==0){
    // alert("el nombre no es valido")
    document.querySelector('#errorNombre').innerHTML = "el nombre no es valido"
    return false;
   }else{
    document.querySelector('#errorNombre').style.display = "none"

   }
   if(apellido.trim() == null || apellido.trim().length ==0){
    // alert("el apellido no es valido")
    document.querySelector('#errorApellido').innerHTML = "el apellido no es valido"

    return false;
   } else{
    document.querySelector('#errorApellido').style.display = "none"

   }
   if(edad == null || edad <=0 || isNaN(edad)){
    // alert("la edad no es valido")
    document.querySelector('#errorEdad').innerHTML = "la edad no es valido"

    return false;
   } else{
    document.querySelector('#errorEdad').style.display = "none"

   }

   box_dashed.style.display = "block"

   var p_nombre = document.querySelector('#p_nombre span');
   var p_apellido = document.querySelector('#p_apellido span');
   var p_edad = document.querySelector('#p_edad span');

   p_nombre.innerHTML = nombre;
   p_apellido.innerHTML = apellido;
   p_edad.innerHTML = edad;


//    var datos_usuario = [nombre,apellido,edad]
// var indice;

//    for(indice in datos_usuario){

//     var parrafo = document.createElement("p")
//     parrafo.append(datos_usuario[indice]);
//     box_dashed.append(parrafo) ;

//    }
   
})

})
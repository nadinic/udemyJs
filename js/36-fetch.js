'use strict'
//Fetch(ajax) y peticiones a servicios ( api rest)
var divUsuarios = document.querySelector( '#usuarios' );
var divJanet = document.querySelector( '#janet' );

var usuarios = [];


  getUsuarios()  
    .then( data =>data.json())
    .then(users =>{
        usuarios = users.data; //guardamos los datos en la variable global de
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then( data => data.json())
    .then(user =>{

        mostrarJanet(user.data);

    }); 
    
    
 function getUsuarios(){
    return fetch('https://reqres.in/api/users');

 }
 
 function getJanet(){
    return fetch('https://reqres.in/api/users/2');

 }


function listadoUsuarios(usuarios){

    usuarios.map((user,i)=>{
        let nombre = document.createElement( "h3" );

        nombre.innerHTML =i+"-"+ user.first_name+" " + user.last_name
        divUsuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";

    });

}

function mostrarJanet(user){
console.log(user)
   
        let nombre = document.createElement( "h4" );

        let avatar = document.createElement( 'img' );

        nombre.innerHTML =  user.first_name+" " + user.last_name

        avatar.src = user.avatar;
        avatar.width = "100px"
        // avatar.height = "100px"
        divJanet.appendChild(nombre);
        divJanet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = "none";

}
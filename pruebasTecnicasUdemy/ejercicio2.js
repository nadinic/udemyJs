/*
dado una cadena de texto, detectar si es palindromo o no

*/


function palindromo (palabra){
    var resultado = "";
    var str =  palabra.toLowerCase(); //convertir a minusculas y quitar los espacios
    var invertir = str.split("").reverse().join("");  //invertir la cadena 
         
    if ( str == invertir){
         resultado = `${palabra} si es un palindromo`;
    }else{
         resultado = `${palabra} NO es un palindromo`;
    }
    return resultado;
}
console.log(palindromo("Ana")); // true
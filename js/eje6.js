'use strict'


var numero1 = parseInt(prompt("ingrese numero: "))

while(isNaN(numero1)){

    numero1 = parseInt(prompt("ingrese un numero valido: "))


}

if(numero1%2==0){
    alert("el numero es par")
} else{
    alert("el numero es impar")
}
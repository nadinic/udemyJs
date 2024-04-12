

var numero1 = parseInt(prompt("inserte numero1:"))

var numero2 = parseInt(prompt("inserte numero2:"))

while( numero1 <= 0 || numero2 <= 0 ||  isNaN(numero1) || isNaN(numero2)){

numero1 = parseInt(prompt("inserte numero1 nuevamente:"));

numero2 = parseInt(prompt("inserte numero2 nuevamente:"));

}

if(numero1 < numero2){
    alert(`numero 1:${numero1} es menor a numero 2 :${numero2}`)
} else if (numero1 == numero2) {
    alert(`numero 1:${numero1} es igual a numero 2 :${numero2}`)
}else if(numero1> numero2){
    alert(`numero 1:${numero1} es mayor a numero 2 :${numero2}`)
} else{
    alert("introduce numeros correctos")
}








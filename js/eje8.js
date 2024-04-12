'use strict'

var numero1 = parseFloat(prompt("ingrese numero1: "))

var numero2 = parseFloat(prompt("ingrese numero: "))

while(isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("ingrese un numero1 valido: "))

    numero2 = parseInt(prompt("ingrese un numero2 valido: "))


}

document.write(`<h1>Calculadora de ${numero1} e ${numero2} </h1>`)


document.write(`${numero1} + ${numero2} = ${numero1+numero2} <br>`)

document.write(`${numero1} - ${numero2} = ${numero1-numero2} <br>`)


document.write(`${numero1} * ${numero2} = ${numero1*numero2} <br>`)


document.write(`${numero1} / ${numero2} = ${numero1/numero2} <br>`)
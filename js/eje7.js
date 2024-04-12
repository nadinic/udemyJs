'use strict'




var numero = parseInt(prompt("ingrese numero: "))


while(isNaN(numero)){
    var numero = parseInt(prompt("ingrese un numero valido: "))

}


for(var c = 1;c<= numero;c++){

    document.write(` <h1>La tabla del ${c}</h1> <br>`);


    for(var i = 1; i<= 10;i++){

        document.write(` ${c} X ${i} = ${c*i} <br>`);
    }


}


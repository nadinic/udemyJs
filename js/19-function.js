'use stric'


function calculadora(number1,number2, mostrar = false){

    if ( mostrar == false){
        porConsola(number1, number2);
        
    } else{

        porPantalla(number1, number2) 
    }

    return true;
}

function porConsola(number1,number2){
    return console.log("suma:"+(number1+number2),"resta:"+(number1-number2),"division:"+(number1/number2),"multiplicacion:"+(number1*number2))

}

function porPantalla(number1,number2){
    return  document.write("suma:"+(number1+number2)+"<br>"
    +"resta:"+(number1-number2)+"<br>"
    +"division:"+(number1/number2)+"<br>"
    +"multiplicacion:"+(number1*number2)+"<br>"+ "<hr>");  

}
// for(var i = 1; i<=10;i++){
//     calculadora(i,8);

// };


calculadora(3,2);
calculadora(4,5,true);
/* 
dividir 2 numeros sin usar el simbolo de division ni multiplicacion
*/

function  dividir(a,b){
    var resultado = 0;
while (a >= b){
     a = a - b;
    
    resultado ++ ; 
    
}
return resultado;

}

console.log(dividir(28,4)); //imprime 2

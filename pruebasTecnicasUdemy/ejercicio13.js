/*
dado un array, dividirlo  en tantos subarrays
como sea neceario basandonos en un numero  que indique su tamaño

*/
var array = [1,2,3,4];

function dividirArray(arr, tam){
    var subarrays = [];
    for (var i = 0; i < arr.length; i += tam) {
        subarrays.push(arr.slice(i, i + tam));
    }
    return subarrays;
}

console.log(dividirArray(array, 1)); // Debería imprimir: [[1, 2], [3, 4]]

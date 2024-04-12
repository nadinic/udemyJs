/*
indicar si un string es palindromo
*/


function  isPalindrome(str){

    var inverso = str.split("").reverse().join("");
    if ( inverso == str) {
        return true
    } else{
        return false;
    }
}

console.log(isPalindrome("pablo")); //true
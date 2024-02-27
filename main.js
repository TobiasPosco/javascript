


// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOImpar (numero) {
    if(numero %2 ===0){
        console.log(numero + " es par")
    } else {
        console.log(numero + " es impar")
    }    
}    

parOImpar (10)
parOImpar (5)



// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("son iguales");
    }
}

compararNumeros(5, 10);
compararNumeros(8, 3);
compararNumeros(7, 7);




// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    }    
}    


esMultiploDe5(10);
esMultiploDe5(7);




// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }        
}        


imprimirNumerosHasta(5);



// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabraMultiplesVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }        
}        


imprimirPalabraMultiplesVeces("Hola", 5);




// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(array) {
    array.forEach(function(valor) {
        console.log(valor);
    });            
}            


let miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) { 
            console.log(array[i]);
        }                
    }                
}                

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArrayExceptoQuinto(numeros);



// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function multiplicarArrayPorNumero(array, numero) {
    array.forEach(function(elemento) {
        console.log(elemento * numero);
    });                
}                

let numero = [1, 2, 3, 4, 5];
let multiplicador = 2;
multiplicarArrayPorNumero(numero, multiplicador);
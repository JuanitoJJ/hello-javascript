/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sumaNumeros(a,b){
    return a + b
}
let resultado = sumaNumeros(5,10)
console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// Ejemplo de uso
let myArray = [2, 3, 4, 70, 33, 44, 50, 10, 14];
let resultado2 = encontrarMayor(myArray);

function encontrarMayor(array) {
    let mayor = array[0]; // Inicializar con el primer elemento del array

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]; // Actualizar si se encuentra un número mayor
        }
    }

    return mayor;
}

console.log("El número mayor es: " + resultado2);


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// Ejemplo de uso
let palabra = "Hola como estas?";
let numeroDeVocales = contarVocales(palabra);

function contarVocales(palabra) {
    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase();
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log("El número de vocales en la palabra es: " + numeroDeVocales);


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings3 = ["Hola","Adios","loksea"];


function mayusculas (strings3){
    let strings2 = []
    for (i = 0; i < strings3.length; i ++){
       strings2.push(strings3[i].toUpperCase())
    }
  
     console.log(strings2)
}

mayusculas (strings3)


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;
    // El número 2 y 3 son primos
    if (num <= 3) return true;
    // Elimina números pares mayores a 2 y múltiplos de 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Solo verifica hasta la raíz cuadrada de num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

console.log(esPrimo(40));  

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let palabra1 = ["Hola","como","estas?"]
let palabra2 = ["Hola","como","estas","tu?"]

function elementos(palabra1,palabra2){
    return palabra1.filter(function(elemento) {
        return palabra2.includes(elemento);
    })

}
let comunes = elementos(palabra1,palabra2)
console.log(comunes)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numeros = [2,15,18,19,33,38,42,49]

function sumaPares(numeros){
    let numPar = 0
for (i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 == 0){
        numPar += numeros[i]
    }  
}
return numPar
}
let sumaDePares = sumaPares(numeros)
console.log(sumaDePares)


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado


let arrayNumeros = [3,5,7,8,9,12]

function elevarAlCuadrado(arrayNumeros) {
    let arrayCuadrado = [];
for (i = 0; i < arrayNumeros.length; i ++){
    arrayCuadrado.push(Math.pow(arrayNumeros[i], 2))
}
    return arrayCuadrado
}
let arrayCuadrado = elevarAlCuadrado(arrayNumeros)
console.log(arrayCuadrado)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaInversa(cadenaTexto) {
    // Dividimos la cadena en un array de palabras usando split
    let palabras = cadenaTexto.split(" ");
    
    // Invertimos el orden de las palabras usando reverse
    let palabrasInvertidas = palabras.reverse();
    
    // Unimos las palabras invertidas en una cadena nuevamente usando join
    let resultado3 = palabrasInvertidas.join(" ");
    
    return resultado3;
}

let cadenaTexto = "Palabras en orden inverso";
let resultado3 = cadenaInversa(cadenaTexto);
console.log(resultado3); // "inverso orden en Palabras"

// 10. Crea una función que calcule el factorial de un número dado

function calcularFactorial(num) {
    if (num < 0) {
        return
    }
    
    let factorial = 1;
    
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    
    return factorial;
}

let numero = 10;
let resultado4 = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado4}`);
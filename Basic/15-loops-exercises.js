/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (i =1; i <= 20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let numeros = 0

for (i = 0; i <= 100; i++){
    numeros += i
}
console.log(numeros)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


for (i = 0; i <= 50; i++){
    if ( i % 2 === 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Juan","Erika","Groot","Bimbo"]

for (let valor of nombres){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "Hola"
let contador = 0
let vocales = ["a","e","i","o","u","A","E","I","O","U"]

for (i = 0; i < cadena.length; i ++){
    if (vocales.includes(cadena[i])){
        contador ++
    }
}
 console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

numeros = [2,3,4,5,6,5]
resultado = 1

for (i = 0; i < numeros.length; i ++){
    resultado *= numeros[i]
}
console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let numero = 5

for (i = 0; i < 10; i ++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}
// 8. Usa un bucle para invertir una cadena de texto

var cadena2 = "Hola como estas?"
var cadenarevertida = 0

for (i = cadena2.length -1; i >= 0; i--){
    cadenarevertida += cadena2[i]
}
 console.log(cadenarevertida)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

var numero1 = 0, numero2 = 1, suma

console.log(numero1)
console.log(numero2)

for (i = 3; i <= 10; i++){
    var suma = numero1 + numero2
    console.log(suma)
    numero1 = numero2
    numero2 = suma
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10


var num = [2,3,5,11,14,5,44,50,70,15,18]
var mayores10 = []

for (i = 0; i <= num.length; i++){
    if (num[i] > 10){
        mayores10.push(num[i])
    }
}
console.log(mayores10)
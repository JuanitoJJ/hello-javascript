/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let misAnimales = ["Perro","Gato","Lobo","Jirafa","Buho"]
console.log(misAnimales )

// 2. Añade dos más. Uno al principio y otro al final

misAnimales.unshift("Elefante")
console.log(misAnimales)
misAnimales.push("Uron")
console.log(misAnimales)

// 3. Elimina el que se encuentra en tercera posición

misAnimales.splice(2,1)
console.log(misAnimales)

// 4. Crea un set que almacene cinco libros

let misLibros = new Set(["Cien Años de Soledad", "Don Quijote", "Matar a un Ruiseñor", "1984", "El Gran Gatsby"]);

// 5. Añade dos más. Uno de ellos repetido

misLibros.add("El Hobbit");
misLibros.add("1984"); // Este ya existe en el Set

// 6. Elimina uno concreto a tu elección

misLibros.delete("Don Quijote");

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    ["5","Mayo"],
    ["6","Junio"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.get("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let myArray = ["Junio","Julio","Agosto"]
//console.log(myArray)

console.log(myMap.set("Meses",myArray))
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let animales = ["Perro","Gato","Leon"]
console.log(animales)
let animalesSet = new Set([animales])
console.log(animalesSet)
let animalesMap = new Map ([
    ["animales",animalesSet]
])
console.log(animalesMap)
/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola";
let cadena2 = "Mundo";
let concatenacion = cadena1 + " " + cadena2;
console.log(concatenacion); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto
let longitud = concatenacion.length;
console.log("Longitud de la cadena:", longitud); // Longitud de la cadena: 10

// 3. Muestra el primer y último carácter de un string
let primerCaracter = concatenacion[0];
let ultimoCaracter = concatenacion[concatenacion.length - 1];
console.log("Primer carácter:", primerCaracter); // Primer carácter: H
console.log("Último carácter:", ultimoCaracter); // Último carácter: o

// 4. Convierte a mayúsculas y minúsculas un string
let mayusculas = concatenacion.toUpperCase();
let minusculas = concatenacion.toLowerCase();
console.log("Mayúsculas:", mayusculas); // "HOLA MUNDO"
console.log("Minúsculas:", minusculas); // "hola mundo"

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esta es una cadena
de texto que abarca
varias líneas.`;
console.log(multilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Juan";
let saludo = `Hola, ${nombre}. ¿Cómo estás?`;
console.log(saludo); // "Hola, Juan. ¿Cómo estás?"

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let stringConGuiones = concatenacion.replace(/ /g, "-");
console.log("Cadena con guiones:", stringConGuiones); // "Hola-Mundo"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let contieneMundo = concatenacion.includes("Mundo");
console.log("¿Contiene 'Mundo'?:", contieneMundo); // true

// 9. Comprueba si dos strings son iguales
let string1 = "Hola";
let string2 = "Hola";
let sonIguales = string1 === string2;
console.log("¿Son iguales?:", sonIguales); // true

// 10. Comprueba si dos strings tienen la misma longitud
let longitudIgual = string1.length === string2.length;
console.log("¿Tienen la misma longitud?:", longitudIgual); // true

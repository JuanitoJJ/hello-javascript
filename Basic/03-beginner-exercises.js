/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Esto es un comentario en una sola línea

console.log("Hola");

// 2. Escribe un comentario en varias líneas

/* 
Esto es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
let numero = 4;              // Tipo: Number
let texto = "Palabra";       // Tipo: String
let booleano = true;         // Tipo: Boolean
let indefinido;              // Tipo: Undefined
let nulo = null;             // Tipo: Null
let simbolo = Symbol("id");  // Tipo: Symbol
let bigInt = 1234567890123456789012345678901234567890n; // Tipo: BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(numero);         // 4
console.log(texto);          // "Palabra"
console.log(booleano);       // true
console.log(indefinido);     // undefined
console.log(nulo);           // null
console.log(simbolo);        // Symbol(id)
console.log(bigInt);         // 1234567890123456789012345678901234567890n

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof numero);       // "number"
console.log(typeof texto);        // "string"
console.log(typeof booleano);     // "boolean"
console.log(typeof indefinido);   // "undefined"
console.log(typeof nulo);         // "object" (es un caso especial en JavaScript)
console.log(typeof simbolo);      // "symbol"
console.log(typeof bigInt);       // "bigint"

// 6. Modifica los valores de las variables por otros del mismo tipo
numero = 6;               // Tipo: Number
texto = "Adiós";          // Tipo: String
booleano = false;         // Tipo: Boolean

console.log(numero);      // 6
console.log(texto);       // "Adiós"
console.log(booleano);    // false

// 7. Modifica los valores de las variables por otros de distinto tipo
numero = "seis";          // Cambia a Tipo: String
texto = 123;              // Cambia a Tipo: Number
booleano = "verdadero";   // Cambia a Tipo: String

console.log(numero);      // "seis"
console.log(texto);       // 123
console.log(booleano);    // "verdadero"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const CONSTANTE_NUMERO = 10;              // Tipo: Number
const CONSTANTE_TEXTO = "Constante";      // Tipo: String
const CONSTANTE_BOOLEANO = true;          // Tipo: Boolean
const CONSTANTE_SIMBOLO = Symbol("key");  // Tipo: Symbol
const CONSTANTE_BIGINT = 1234567890123456789012345678901234567890n; // Tipo: BigInt

// 9. Modifica los valores de las constantes
// No se pueden modificar los valores de una constante

// CONSTANTE_NUMERO = 20;     // Esto producirá un error
// CONSTANTE_TEXTO = "Nuevo"; // Esto producirá un error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las líneas que intentan modificar una constante están comentadas para evitar errores.

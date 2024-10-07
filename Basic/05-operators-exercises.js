/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 2;
let multiplicacion = 4 * 3;
let division = 20 / 4;
let modulo = 15 % 4;

// 2. Crea una variable para cada tipo de operación de asignación
let asignacionSuma = 5;
asignacionSuma += suma; // asignacionSuma = 5 + suma

let asignacionResta = 20;
asignacionResta -= resta; // asignacionResta = 20 - resta

let asignacionMultiplicacion = 2;
asignacionMultiplicacion *= multiplicacion; // asignacionMultiplicacion = 2 * multiplicacion

let asignacionDivision = 50;
asignacionDivision /= division; // asignacionDivision = 50 / division

let asignacionModulo = 10;
asignacionModulo %= modulo; // asignacionModulo = 10 % modulo

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3); // true
console.log(10 >= 10); // true
console.log(4 == "4"); // true
console.log(20 === 20); // true
console.log(15 != 10); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 3); // false
console.log(10 > 15); // false
console.log(4 === "4"); // false
console.log(20 != 20); // false
console.log(15 <= 10); // false

// 5. Utiliza el operador lógico AND
let andCondition = (5 > 3) && (10 > 5);
console.log(andCondition); // true

// 6. Utiliza el operador lógico OR
let orCondition = (5 < 3) || (10 > 5);
console.log(orCondition); // true

// 7. Combina ambos operadores lógicos
let combinedCondition = (5 > 3) && (10 < 5) || (4 === 4);
console.log(combinedCondition); // true

// 8. Añade alguna negación
let negationCondition = !(5 > 3);
console.log(negationCondition); // false

// 9. Utiliza el operador ternario
let edad = 18;
let acceso = (edad >= 18) ? "Acceso permitido" : "Acceso denegado";
console.log(acceso); // "Acceso permitido"

// 10. Combina operadores aritméticos, de comparación y lógicos
let combinacion = ((5 + 5) > (3 * 3)) && (10 / 2 === 5);
console.log(combinacion); // true

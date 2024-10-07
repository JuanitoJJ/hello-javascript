/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Erika"

if (nombre == "Erika"){
    console.log("El nombre es correcto")
} else{
    console.log("El nombre no es correcto")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "JuanitoJJ"
let contraseña = 1234

if (usuario === "JuanitoJJ" && contraseña === 1234){
    console.log("Las credenciales son correctas")
}else{
    console.log("Las credenciales no son correctas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -4

if (numero > 0){
    console.log("El numero es positivo")
} else if (numero == 0){
    console.log("El numero es 0")
} else{
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

edad = 15
minimo = 18 

if (edad < minimo){
    console.log(`Eres aun menor de edad, te quedan ${minimo - edad} años para poder votar.`)
} else{
    console.log("Eres mayor de edad puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 = 17

const mensaje = edad2 == 18 ? "Eres adulto" : "Eres menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Agosto"; // Puedes cambiar este valor para probar diferentes meses

let estacion;

let mes3 = 5

if (mes3 ==3 || mes3 <=5){
    console.log("Estamos en primavera")
} else if(mes3 ==6 || mes3 <=8){
    console.log("Estamos en Verano")
} else if (mes3 ==9 ||mes3 <=11){
    console.log("Estamos en Otoño")
} else {
    console.log("Estamos en invierno")
}

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        estacion = "Invierno";
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        estacion = "Primavera";
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        estacion = "Verano";
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes no válido";
}

console.log("Estamos en:", estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

mes = "Julio";
let dias;

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        dias = 31;
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        dias = 30;
        break;
    case "Febrero":
        dias = 28; // Asumiendo un año no bisiesto
        break;
    default:
        dias = "Mes no válido";
}

console.log(`El mes de ${mes} tiene ${dias} días.`);


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

idioma = "FRA"

switch (idioma){
    case "ESP":
        console.log("El idioma esta parametrizado en " + idioma)
        break
    case "POR":
        console.log("El idioma esta parametrizado en " + idioma)
        break
    case "FRA":
        console.log("El idioma esta parametrizado en " + idioma)
        break
    default:
        console.log("Introduce un idioma en 3 digitos")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
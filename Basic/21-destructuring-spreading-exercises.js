/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo] = numeros;
console.log(primero, segundo); // 1 2

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [a, b, c = 10] = [5, 7]; 
console.log(a, b, c); // 5 7 10 (valor predeterminado)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = { nombre: 'Luis', edad: 25, ciudad: 'Bogotá' };
const { nombre, edad } = persona;
console.log(nombre, edad); // Luis 25

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
const { nombre: nombreCompleto, edad: años } = persona;
console.log(nombreCompleto, años); // Luis 25

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const usuario = {
  nombre: 'Pedro',
  direccion: {
    ciudad: 'Sevilla',
    pais: 'España'
  }
};
const { direccion: { ciudad, pais } } = usuario;
console.log(ciudad, pais); // Sevilla España

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// 7. Usa propagación para crear una copia de un array
const copiaArray = [...array1];
console.log(copiaArray); // [1, 2, 3]

// 8. Usa propagación para combinar dos objetos en uno nuevo
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinadoObj = { ...obj1, ...obj2 };
console.log(combinadoObj); // { a: 1, b: 2, c: 3, d: 4 }

// 9. Usa propagación para crear una copia de un objeto
const copiaObj = { ...obj1 };
console.log(copiaObj); // { a: 1, b: 2 }

// 10. Combina desestructuración y propagación
const personaCompleta = { nombre: 'Ana', edad: 30, ciudad2: 'Lima', pais: 'Perú' };
const { ciudad2, ...resto } = personaCompleta;
console.log(ciudad); // Lima
console.log(resto);  // { nombre: 'Ana', edad: 30, pais: 'Perú' }

/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let objeto = {
    name : "Juan",
    age : 34,
    alias : "Juanito"
}

// 2. Accede y muestra su valor

console.log(objeto.name)

// 3. Agrega una nueva propiedad

objeto.email = "juan.jarque.ortiz@gmail.com"
console.log(objeto.email)

// 4. Elimina una de las 3 primeras propiedades

delete objeto.alias
console.log(objeto)

// 5. Agrega una función e invócala

let objeto2 = {
    name : "Juan",
    age : 34,
    alias : "Juanito",
    walk: function (){
        console.log("La persona camina")
    } 
}
objeto2.walk()

// 6. Itera las propiedades del objeto

console.log(objeto2)

// 7. Crea un objeto anidado

let objeto3 = {
    name : "Juan",
    age : 34,
    alias : "Juanito",
    walk: function (){
        console.log("La persona camina")
    },
    job: {
        name : "Informatico",
        experience: 10,
        work : function() {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    } 
}

objeto3.job.work

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales
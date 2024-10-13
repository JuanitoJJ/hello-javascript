/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class Persona {

        constructor(name, age){
            this.name = name
            this.age = age
        }
}

let persona = new Persona("Juan", 34)
console.log(persona)

// 2. Añade un método a la clase que utilice las propiedades

class PersonaConMetodo {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    camina() {
        console.log("La persona camina")
    }
}

let persona2 = new PersonaConMetodo("Juan", 34)
persona2.camina()

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 
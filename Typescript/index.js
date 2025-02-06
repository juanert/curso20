"use strict";
let nombre = 'Juan';
//Tipos de datos
let apellido = 'Perez';
let edad = 32;
let casado = false;
let fechaNacimiento = new Date();
let extra = "Cualquier cosa";
let sinDefinir = undefined;
let nulo = null;
//Para declarar un arreglo se puede hacer de la siguiente manera
let numeros = [1, 2, 3, 4, 5];
//Otra forma de declarar un arreglo
let nombres = ['Juan', 'Pedro', 'Luis'];
//Declarar un array con varios tipos de datos
let varios = [1, 'Juan', true];
//Para declarar objetos se puede hacer de la siguiente manera
let persona = {
    nombre: 'Juan',
    edad: 32
};
//Declarar una función
function suma(a, b) {
    return a + b;
    //si una funcion no tiene return se le puede poner void
}
suma(1, 2);
//Para declarar una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
let persona1 = new Persona('Juan', 32);
let persona2 = {
    nombre: 'Juan',
    edad: 32
};
let persona3 = {
    nombre: 'Pedro',
};
//Manejar un elemeneto del DOM con TypeScript
// let elemento: HTMLElement = document.getElementById('elemento');

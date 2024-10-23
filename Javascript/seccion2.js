//SCOPE (Alcance)
//Variable global
var nombre = "Juan";
//Variable local
let apellido = "Perez";
//Constante (no puede ser reasignada, alcanza el scope global)
const PI = 3.1416;

//Puedo cambiarle el valor
nombre = "Pedro";
//No puedo cambiarle el valor
//PI = 3.14;

//Alcance
if (true) {
  //variable local (solo se puede acceder dentro del bloque)
  let numero1 = 16;
  //variable global (se puede acceder desde cualquier parte)
  var numero2 = 20;
}

//console.log(numero1); //Error
console.log(numero2);
/*
  Si se declara una variable let fuera de todos los bloques
  se puede acceder a ella desde cualquier parte del código
  let numero3 = 30;
*/
if(true){
  if(true){
    let local = "Hola, soy local";
  }
  //La variable local solo se puede acceder dentro del
  //bloque del que fue declarada
  //console.log(local) error
}

//Funciones
/*
  Nos permiten reutilizar un bloque de codigo,
  son similares a los MIXINS que hemos visto en SASS
*/

//Funcion sin parametros
//Declaramos la función
function saludar(){
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0){
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
}

saludarPersona("Juan", 20);
saludarPersona("Pedro");
saludarPersona("Maria");
saludarPersona();

/*
  Crea el ejercicio de la calculadora, realizado el día de ayer, pero ahora
  utilizando funciones.
*/
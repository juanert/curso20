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
if (true) {
  if (true) {
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
function saludar() {
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0) {
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

//Funcion con retorno
function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

/*
  Ejercicios de funciones con retorno
*/

function calcularIMC(peso = 0, altura = 0) {
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.7)); //24.221453287197235

function calcularAreaTriangulo(base = 0, altura = 0) {
  (base * altura) / 2;
}

console.log(calcularAreaTriangulo(10, 5)); //undefined

function calcularAreaCirculo(radio = 0) {
  if (radio <= 0) {
    return "El radio debe ser mayor a 0";
  } else if (typeof radio !== "number") {
    return "El radio debe ser un número";
  } else {
    if (radio <= 5) {
      return "El radio debe ser mayor a 5";
    }
    return 3.14 * (radio * radio);
  }
}

console.log(calcularAreaCirculo(2));

function salirFinDeSemana(tiempo = false, dinero = false, ganas = false) {
  if (tiempo && dinero && ganas) {
    console.log("Saldré a divertirme");
  }
  if (tiempo && dinero) {
    return "Saldré desganado";
  }
  if (tiempo) {
    if (ganas) {
      console.log("Saldre a hacer ejecicio");
    }
    return "Saldré a matar el tiempo";
  }
  return "No saldré";
}

console.log(salirFinDeSemana(true, false, true));

//Funciones flecha (Arrow functions) también son conocidas como funciones anónimas
//Son una forma de escribir funciones de manera más corta y pueden ser
//asignadas a una variable

var funcionFlecha = (numero1 = 0, numero2 = 0) => {
  numero1 + numero2;
};

console.log(funcionFlecha(10, 30));

/*
  Ejercicios de funciones con retorno y sin retorno. Debes determinar que imprime
  cada uno de los console.log

  function suma(numero1, numero2){
    return numero1 + numero2;
  }
  
  console.log(suma(10, 20));

  function resta(numero1, numero2){
    console.log(numero1 - numero2);
  }
  
  console.log(resta(10, 20));

  function hallarAreaTriangulo(base, altura){
    if(base <= 0 || altura <= 0){
      return "Los valores deben ser mayores a 0";
    } else if(base === altura){
      return "La base y la altura no pueden ser iguales";
    } else {
      console.log((base * altura) / 2;) 
    }
  }

  console.log(hallarAreaTriangulo(10, 5));

  function hallarAreaCirculo(radio){
    if(radio <= 0){
      return "El radio debe ser mayor a 0";
    } else if(typeof radio !== "number"){
      return "El radio debe ser un número";
    } else {
      if(radio <= 5){
        return "El radio debe ser mayor a 5";
      }
      console.log(3.14 * (radio * radio));
    }
  }

  console.log(hallarAreaCirculo(2));
*/

/*
  Recursividad (una función se llama a si misma)
*/

function contar(numero) {
  if (numero >= 100) {
    return;
  }
  console.log(numero);
  contar(numero + 1);
}

contar(0);

function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

function restar(numero1 = 0, numero2 = 0) {
  return numero1 - numero2;
}

function multiplicar(numero1 = 0, numero2 = 0) {
  return numero1 * numero2;
}

function dividir(numero1 = 0, numero2 = 0) {
  return numero1 / numero2;
}

//Funciones dentro de funciones
function calculadora(numero1 = 0, numero2 = 0, operacion = "sumar") {
  if (operacion === "sumar") {
    return sumar(numero1, numero2);
  } else if (operacion === "restar") {
    return restar(numero1, numero2);
  } else if (operacion === "multiplicar") {
    return multiplicar(numero1, numero2);
  } else if (operacion === "dividir") {
    if(numero2 === 0){
      return "No se puede dividir por 0";
    }
    return dividir(numero1, numero2);
  } else {
    return "Operación no válida";
  }
}

var global = "Soy global";

function funcion_alcance() {
  console.log(global);
}

funcion_alcance();

/*
  Ejercicios de recursividad
  1. Crea una función que imprima la potencia de un número elevado a otro número.
  2. Crea una función que reciba un número y retorne el factorial de ese número.
  3. Crea una función que imprima la sucesion de Fibonacci hasta el número que se le pase como parametro.
*/

//1
function elevar(numero, potencia) {
  if (potencia === 0) {
    return 1;
  }
  return numero * elevar(numero, potencia - 1);
}

console.log(elevar(2, 3)); //8

//2

function factorial(numero) {
  if (numero === 0) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

console.log(factorial(5)); //120

//3
function fibonacci(numero,resultado_anterior = 0, resultado_actual = 1) {
  if (numero === 0) {
    return;
  }
  if(resultado_actual < numero){
    console.log(resultado_actual);
    fibonacci(numero, resultado_actual, resultado_anterior + resultado_actual);
  }
}

fibonacci(50); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/*
  Los prototipos en javascript son una forma de agregar propiedades y metodos a un objeto
  que ya ha sido creado.
*/


console.log("Pablo clavo un clavito")

/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean, etc.
  Los metodos ejecutan una funcion
*/

//Metodos de strings
var texto = "Hola, soy un texto";
//Transformar un string a mayusculas
console.log(texto.toUpperCase());
//Transformar un string a minusculas
console.log(texto.toLowerCase());
//Obtiene la posicion de una palabra en un string
console.log(texto.indexOf("soy"));
//Corta un string
console.log(texto.slice(5, 8));
//Divide un string en un array
console.log(texto.split(" "));
//Reemplaza una palabra por otra
console.log(texto.replace("Hola", "Adios"));
//Reemplaza todas las ocurrencias de una palabra por otra
console.log(texto.replaceAll("o", "0"));
//Verifica si un string incluye una palabra
console.log(texto.includes("Hola"));
//Verifica si un string empieza con una palabra
console.log(texto.startsWith("Hola"));
//Verifica si un string termina con una palabra
console.log(texto.endsWith("texto"));
//Obtiene la posicion de un caracter en un string
console.log(texto.charAt(8));
//Obtiene el codigo ASCII de un caracter
console.log(texto.charCodeAt(2));
//Recorta los espacios en blanco de un string
console.log("  Hola, soy un texto   ".trim());
//Repite un string
console.log(texto.repeat(3));
//Concatena dos strings
console.log(texto.concat(" y yo soy otro texto"));
// texto + " y yo soy otro texto"

//Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de letras que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)
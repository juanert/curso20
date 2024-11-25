/**
 * Try Catch
 * El try catch es una estructura que nos permite capturar errores en nuestro código
 * y manejarlos de una forma más amigable para el usuario.
 */

try {
  // Código que se va a ejecutar
  let hola = "Hola";
  /**
   * El throw nos permite lanzar un error personalizado
   */
  if (hola !== "Hola") {
    throw "La variable no es igual a Hola";
  }

  /**
   * Si se ejecuta el throw, el código que sigue después de él no se ejecuta
   */
  console.log(Hola);
} catch (error) {
  // Código que se va a ejecutar si hay un error
  if (error instanceof ReferenceError) {
    console.log("La variable no está definida");
  } else {
    console.log(`Hay algún error: ${error}`);
  }
}

/**
 * Asincronismo
 * El asincronismo en Javascript es una característica que nos permite ejecutar
 * varias tareas al mismo tiempo, sin que una tarea tenga que esperar a que otra
 * termine para poder ejecutarse.
 */

/**
 * Callbacks
 * Los callbacks son funciones que se pasan como argumentos a otras funciones
 */

/**
 * SetTimeout
 * La función setTimeout nos permite ejecutar una función después de un tiempo
 */

let saludo = () => {
  console.log("Hola");
};
/**
 * Primer parámetro: Función que se va a ejecutar
 * Segundo parámetro: Tiempo en milisegundos que se va a esperar para ejecutar la función
 */
setTimeout(saludo, 2000);

/**
 * setInterval
 * La función setInterval nos permite ejecutar una función cada cierto tiempo
 * que nosotros definamos
 */

let saludoRepetido = () => {
  console.log("Hola desde el setInterval");
};
setInterval(saludoRepetido, 2000);

/**
 * Promesas
 * Las promesas son objetos que representan la terminación o el fracaso de una operación
 * asíncrona. Las promesas tienen tres estados:
 * - Pendiente
 * - Resuelta
 * - Rechazada
 */

/**
 * Resolve y Reject
 * Resolve y Reject son funciones que se pasan como argumentos a la promesa
 * y nos permiten cambiar el estado de la promesa
 * - Resolve: Cambia el estado de la promesa a resuelta
 * - Reject: Cambia el estado de la promesa a rechazada
 */
let promesa = new Promise((resolve, reject) => {
  let numero = 5;
  if (numero === 5) {
    resolve("El número es igual a 5");
  } else {
    reject("El número no es igual a 5");
  }
});

/**
 * then y catch
 * then y catch son métodos que se pueden
 * encadenar a una promesa para manejar el resultado
 * de la misma
 * - then: Se ejecuta si la promesa se resuelve
 * - catch: Se ejecuta si la promesa se rechaza
 */

let resolver = (resultado) => {
  console.log(resultado);
};

let rechazar = (error) => {
  console.log(error);
};

promesa.then(resolver).catch(rechazar);

/**
 * Async Await
 * Async Await es una forma más sencilla de trabajar con promesas
 * y hacer que el código asíncrono sea más legible
 */

/**
 * Se usan con funciones, indicano que la función es asíncrona  y que
 * dentro de ella se pueden usar await para esperar a que una promesa se resuelva
 * antes de continuar
 */

async function cargarDatos() {
  /**
   * Esta es la funcion será la promesa
   */
  let funcionDePromesa = (resolve, reject) => {
    resolve("Datos cargados");
  };

  /**
   * Esta función se ejecutará si la promesa se resuelve
   */
  let funcionEnCasoTodoBien = (resultado) => {
    console.log(resultado);
  };

  /**
   * Creo la promesa con su funcionalidad
   */
  let promesa = new Promise(funcionDePromesa);

  /**
   * Await se usa para esperar a que una promesa se resuelva
   * En este caso espero que la promesa se resuelva y luego ejecuto
   */
  await promesa.then(funcionEnCasoTodoBien);
  /**
   * Await significa "esperar" y se usa para esperar a que una promesa se resuelva
   * Then significa "entonces" se utiliza para ejecutar la promesa
   */
}

/**
 * JSON
 * JSON es un formato de intercambio de datos que se utiliza en Javascript
 */

function saludar(){
  alert("Hola desde la sección 3");
}

let boton = document.getElementById("boton");

/*
  Programación orientada a eventos
  Consta de la creación de un evento y la asignación de una función a dicho evento
  En este caso, se asigna la función saludar al evento click del botón
*/
boton.addEventListener("click", saludar);

let input = document.getElementById("input");

//Configurar que el evento se ejecute cuando presiono la tecla "Enter"
input.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    saludar();
  }
});

let videos = [
  {
    titulo: "Video 1",
    duracion: 30
  },
  {
    titulo: "Video 2",
    duracion: 40
  },
  {
    titulo: "Video 3",
    duracion: 50
  }
]
/**
 * Input de búsqueda
 */
let search = document.getElementById("search");

/**
 * Botón de búsqueda
 */
let searchButton = document.getElementById("searchButton");

/**
 * @function buscarVideo
 * @description Busca un video en el array de videos
 * @returns {void}
 */
function buscarVideo(){
  let searchValue = search.value;
  let result = videos.filter(video => video.titulo == searchValue);
  if(result.length > 0){
    alert("Video encontrado: " + result[0].titulo);
  } else {
    alert("Video no encontrado");
  }
}

/**
 * Ejecutar función si se hace click en el botón
 */
searchButton.addEventListener("click", buscarVideo);

/**
 * Ejecutar funcion si se presiona enter
 */
search.addEventListener("keydown", function(evento){
  if(evento.key == "Enter"){
    buscarVideo();
  }
});

/**
 * Programación funcional
 * Consta de la creación de funciones que reciben otras funciones como parámetros
 * En este caso, se crea una función que recibe un array y una función de filtrado
 */

/**
 * @function filtrarVideos
 * @description Filtra un array de videos según un criterio
 * @param {Array} videos
 * @param {Function} filtro
 * @returns {Array}
 */
function filtrarVideos(videos, filtro){
  return videos.filter(filtro);
}

/**
 * @function validarLongitudArray
 * @description Valida si un array tiene una longitud mayor a 0
 * @param {Array} array
 * @returns {Boolean}
 */
function validarLongitudArray(array){
  return array.length > 0;
}

/**
 * @function imprimirResultado
 * @description Imprime el resultado de la búsqueda
 * @returns {void}
 */
function imprimirResultado(){
  let result = filtrarVideos(videos, video => video.titulo == search.value);
  if(validarLongitudArray(result)){
    alert("Su video fue encontrado");
  } else {
    alert("No se encontró ningún video");
  }
}

/**
 * Crea una calculadora utilizando
 * - Programación orientada a eventos
 * - Programación funcional
 * - Programación orientada a objetos
 * 
 * Nota: La programación orientada a eventos debe tener interfaz gráfica
 */
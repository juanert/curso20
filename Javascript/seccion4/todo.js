/**
 * Arreglo que almacena las tareas
 */
let tasks = [];

/**
 * Verificar si existen tareas en LocalStorage
 */
if(localStorage.getItem("tasks") != null){
  tasks = JSON.parse(localStorage.getItem("tasks"));
  showTasks();
}

/**
 * LocalStorage
 * Es un objeto que permite almacenar información en el navegador del usuario
 */

/**
 * @function addTask
 * @description Función que agrega una tarea al arreglo de tareas
 */
function addTask() {
  let task = document.getElementById("task").value;
  tasks.push(task);
  // Almacenar en LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("task").value = "";
  showTasks();
}

/**
 * @function showTasks
 * @description Función que muestra las tareas en el DOM
 */
function showTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">X</button>`;
    list.appendChild(li);
  });
}

/**
 * @function removeTask
 * @description Función que elimina una tarea del arreglo de tareas
 * @param {number} index - Índice de la tarea a eliminar
 */
function removeTask(index) {
  tasks.splice(index, 1);
  // Actualizar LocalStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

/**
 * @function clearTasks
 * @description Función que elimina todas las tareas del arreglo de tareas y de LocalStorage
 */
document.getElementById("delete").addEventListener("click", () => {
  localStorage.removeItem("tasks");
  tasks = [];
  showTasks();
});

document.getElementById("add").addEventListener("click", addTask);

/**
 * SessionStorage
 * Es un objeto que permite almacenar información en el navegador del usuario,
 * pero esta información se elimina al cerrar la pestaña
 */

/**
 * Cookies
 * Son pequeños archivos que se almacenan en el navegador del usuario
 */

/**
 *  Ejemplo de uso de Cookies
 *  document.cookie("nombre=valor; expires=fecha; path=directorio");
 */

//Ejemplo de una cookie que se elimina en 1 día
let fechaActual = new Date();
let fechaExpiracion = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000);
document.cookie = `name=Hola; expires=${fechaExpiracion.toUTCString()}; path=/`;

console.log(document.cookie);

/**
 * Proyecto final para Javascript
 * 
 * Crea un sistema de login y registro de usuarios
 * Este debe de tener las siguientes paginas
 * - Login
 * - Registro
 * - Home
 * - Perfil
 * - Administrar usuarios
 * 
 * Login: Debe de tener un formulario con los campos de usuario y contraseña
 * Registro: Debe de tener un formulario con los campos de usuario, email, contraseña y confirmar contraseña
 * Home: Debe de mostrar un mensaje de bienvenida al usuario logueado
 * Perfil: Debe de mostrar la información del usuario logueado y permitir modificarla
 * Administrar usuarios: Debe de mostrar una lista de usuarios registrados, permitir editarlos y eliminarlos. Pero solo un usuario admin puede acceder a esta página
 * 
 * Debes utilizar el localStorage para almacenar la información de los usuarios
 * y validar que el usuario y contraseña sean correctos
 * 
 * Una vez que el usuario se loguee, debe de redirigirse a la página de Home y no
 * podrá acceder a las páginas de Login y Registro.
 * 
 * Debes de crear una cookie que permita recordar que el usuario está logueado y debe vencerse
 * pasado unas dos horas
 * 
 * Un usuario que no esté logueado no podrá acceder a las páginas de Home, Perfil y Administrar usuarios
 * 
 * Todos los formularios deben ser validados para no permitir caracteres indeseados
 * 
 * Para editar un usuario puedes crear una página para editar o hacerlo en la página de Administrar usuarios
 * 
 * La página debe de ser responsive y tener un diseño agradable
 * 
 * Habra dos tipos de usuarios, admin y user. Todos los usuarios deben de tener la propiedad
 * "role" que puede ser "admin" o "user"
 * 
 * Debes de crear documentación profesional para tu proyecto
 * 
 * Debes subir el proyecto a GitHub con un archivo README.md que explique el funcionamiento
 * y una introducción al proyecto
 * 
 * Debes de crear un código limpio y ordenado, fácil de leer y entender
 * 
 * Para crear un usuario admin debes de modificar el localStorage directamente a traves
 * del navegador
 * 
 * La página además debe de tener modo claro y oscuro
 * 
 * Opcional: Agrega un juego de tres en raya en la página de Home
 * 
 * Fecha de entrega: 05/12/2024
 */
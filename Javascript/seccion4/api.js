/**
 * Cargar datos de la API de Rick and Morty
 */

async function cargarDatos() {
  // URL de la API
  let url = "https://rickandmortyapi.com/api/character";

  // Fetch es una función que se usa para hacer peticiones a servidores
  // y obtener información
  // En este caso utilizo fetch para traerme los datos de la API y espero a que
  // se resuelva la promesa
  let respuesta = await fetch(url);

  // Los datos traidos por fetch se guardan como string, asi que
  // los convierto a JSON (Objeto de Javascript)

  let datos = await respuesta.json();
  // Muestro los datos en la consola
  console.log(datos);

  // Renderizo los personajes
  renderizarPersonajes(datos.results);
}

function renderizarPersonajes(personajes) {
  let contenedor = document.getElementById("personajes");
  let html = "";
  personajes.forEach((personaje) => {
    html += `
      <div class="personaje">
        <img src="${personaje.image}" alt="${personaje.name}">
        <h2>${personaje.name}</h2>
      </div>
    `;
  });
  contenedor.innerHTML = html;
}

numero = 1;
numero += 1;
numero = numero + 1;
cargarDatos();

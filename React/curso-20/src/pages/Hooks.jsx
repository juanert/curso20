/*
  Un hook es una función especial que permite “conectarse” a características de React. Por ejemplo, el hook useState permite añadir estado a un componente funcional.
  Los hooks no funcionan en componentes de clase, solo en componentes funcionales.
*/
import { useState, useEffect } from "react";
/*
  Hook useEffect es una función que permite realizar efectos secundarios en componentes funcionales.
  useEffect recibe dos argumentos, una función y un array de dependencias.
  La función se ejecuta cada vez que el componente se renderiza.
  El array de dependencias permite controlar cuándo se ejecuta la función.
*/

function Hooks() {
  const [state, setState] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  //Cargar datos de la API de Rick and Morty
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [page]);

  if(!data) return <p>Cargando...</p>;

  return (
    <div>
      <button
        onClick={() => setState(!state)}
        className={state ? "bg-green-600" : "bg-red-600"}
      >
        Presioname
      </button>
      <ul>
        {data && data.results &&
          data.results.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        {data && data.info && data.info.prev && (
          <button onClick={() => setPage(page - 1)}>Anterior</button>
        )}
        {data && data.info && data.info.next && (
          <button onClick={() => setPage(page + 1)}>Siguiente</button>
        )}
      </ul>
    </div>
  );
}

export default Hooks;

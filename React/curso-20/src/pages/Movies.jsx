import { useState, useEffect } from "react";
import { MovieCard, Pagination } from "../components/components";

function Movies() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const header = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      "x-rapidapi-key": "0f72fb545amshd55cba78a64604cp1e632fjsn672837304d0b",
    },
  };

  useEffect(() => {
    fetch(`https://moviesdatabase.p.rapidapi.com/titles?page=${page}`, header)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [page]);

  const searchMovie = () => {
    fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}`, header)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }



  console.log(data);

  if (!data.results) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Movies</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="border p-2 rounded-xl"
      />
      <button onClick={searchMovie} className="bg-blue-600 text-white px-4 py-2 rounded-xl">
        Buscar
      </button>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">
        {data &&
          data.results &&
          data.results.map((movie) => (
              <MovieCard
                key={movie._id}
                title={movie.titleText.text}
                image={
                  movie.primaryImage?.url ||
                  "https://as2.ftcdn.net/v2/jpg/03/77/77/97/1000_F_377779796_swIOhupa2uTGVGG50Gv8wIfvj9qWneMW.jpg"
                }
                releaseYear={movie.releaseYear.year}
              />
          ))}
      </section>
      <div>
        <Pagination numberPage={page} changePage={setPage} nextPage={data.next ? true : false}/>
      </div>
    </div>
  );
}

export default Movies;

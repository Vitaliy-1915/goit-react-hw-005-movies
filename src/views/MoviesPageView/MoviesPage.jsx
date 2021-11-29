import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../../components/API/Api";
import SearchBar from "../../components/SearchBar/SearchBar";

function MoviesPage() {
  const [MovieName, setMovieName] = useState(null);
  const [movies, setMovies] = useState([]);

  let location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (MovieName === null) {
      return;
    }

    fetchSearchMovies(MovieName).then((movies) => setMovies(movies));
  }, [MovieName]);

  const formSubmit = (MovieName) => {
    setMovieName(null);
    setMovieName(MovieName);
  };

  return (
    <div>
      <h1>juninjlkkkkl</h1>
      <SearchBar onSubmit={formSubmit} />

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}> {movie.original_title} </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;

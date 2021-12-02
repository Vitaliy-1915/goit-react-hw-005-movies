import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchSearchMovies } from "../../components/API/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";

function MoviesPage() {
  const [MovieName, setMovieName] = useState(null);
  const [movies, setMovies] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (MovieName === null) {
      return;
    }

    fetchSearchMovies(MovieName).then((movies) => setMovies(movies));
  }, [MovieName]);

  const formSubmit = (MovieName) => {
    // setMovieName(null);
    setMovieName(MovieName);

    navigate({ ...location, search: `qwery=${MovieName}` });
  };

  return (
    <div>
      <SearchBar onSubmit={formSubmit} />

      {movies && <MoviesList movies={movies} />}
    </div>
  );
}

export default MoviesPage;

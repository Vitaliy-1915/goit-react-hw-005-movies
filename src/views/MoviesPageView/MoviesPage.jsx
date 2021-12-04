import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../components/API/Api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";

function MoviesPage() {
  const [MovieName, setMovieName] = useState(null);
  const [movies, setMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("qwery"));

  // let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (MovieName === null) {
      return;
    }

    fetchSearchMovies(MovieName).then((movies) => setMovies(movies));
  }, [MovieName]);

  const formSubmit = (MovieName) => {
    setSearchParams({ qwery: MovieName });
    setMovieName(MovieName);
  };

  // const formSubmit = (MovieName) => {
  // setMovieName(null);
  // console.log(MovieName);
  // navigate({ ...location, search: `qwery=${MovieName}` });
  //  setMovieName(MovieName);
  // console.log(location);
  // };

  return (
    <div>
      <SearchBar onSubmit={formSubmit} />

      {movies && <MoviesList movies={movies} state={{ from: location }} />}
    </div>
  );
}

export default MoviesPage;

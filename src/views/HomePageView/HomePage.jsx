import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "../../components/API/Api";
import MoviesList from "../../components/MoviesList/MoviesList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  let location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export default HomePage;

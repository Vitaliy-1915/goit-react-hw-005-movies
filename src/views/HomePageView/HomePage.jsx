import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../components/API/Api";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Home Page </h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;

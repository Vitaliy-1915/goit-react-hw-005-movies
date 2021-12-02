import { NavLink } from "react-router-dom";

function MoviesList({ movies }) {
  // let location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink
              to={`/movies/${movie.id}`}
              // state={{ from: location }}
            >
              {movie.original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;

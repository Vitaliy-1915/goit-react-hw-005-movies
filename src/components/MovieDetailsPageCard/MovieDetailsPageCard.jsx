import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { fetchDetailsMovie } from "../../components/API/Api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

function MovieDetailsPageCard() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  let params = useParams();
  const { movieId } = params;
  // console.log(params);

  useEffect(() => {
    fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      {movie && (
        <div>
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>{" "}
          <br />
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
            }
            alt={movie.original_title}
          />
          <h2>
            {movie.title}
            {/* ({movie.release_date.slice(0, 4)}) */}
          </h2>
          <h3>User Score:</h3>
          <p>
            <span>{movie.vote_average * 10}%</span>
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {movie.genres &&
              movie.genres.map((genre) => (
                <li key={genre.id} className="li">
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      )}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<Cast animate />} />
        <Route path="reviews" element={<Reviews animate />} />
      </Routes>
    </>
  );
}

export default MovieDetailsPageCard;

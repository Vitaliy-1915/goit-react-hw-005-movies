import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { fetchDetailsMovie } from "../../components/API/Api";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import s from "../MovieDetailsPageView/MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);
  // const pathname = location.state?.from?.pathname;
  // const search = location.state?.from?.search;

  // const handleClick = () => {
  //   console.log(location.state.from);
  //   navigate(location?.state?.from ?? '/');
  // };

  let params = useParams();
  const { movieId } = params;
  // console.log(params);

  useEffect(() => {
    fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  const onClick = () => {
    console.log(
      `/movies/${movie.id}` === location.pathname ? () => navigate(-1) : "/"
    );
    `/movies/${movie.id}` === location.pathname ? navigate(-1) : navigate("/");
  };

  return (
    <>
      {movie && (
        <div>
          {/* <button type="button" onClick={handleClick}>
            Go back
          </button> */}

          <button className={s.button} onClick={onClick}>
            Go back
          </button>

          <br />
          <div className={s.detailsPage}>
            <img
              className={s.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
              }
              alt={movie.original_title}
            />
            <div>
              <h2 className={s.detailsPageH2}>
                {movie.title}
                {/* ({movie.release_date.slice(0, 4)}) */}
              </h2>
              <p className={s.p}>User Score: {movie.vote_average * 10}%</p>

              <h3 className={s.detailsPageH3}>Overview</h3>
              <p className={s.p}>{movie.overview}</p>
              <h3 className={s.detailsPageH3}>Genres:</h3>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id} className={s.li}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <ul className={s.informationList}>
        <h3 className={s.detailsPageH3}>Additional information :</h3>
        <li>
          <NavLink to="cast" className="link">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className="link">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<Cast animate />} />
        <Route path="reviews" element={<Reviews animate />} />
      </Routes>
    </>
  );
}

export default MovieDetailsPage;

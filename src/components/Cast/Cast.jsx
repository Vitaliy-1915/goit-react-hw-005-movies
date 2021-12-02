import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCastMovie } from "../API/Api";
import s from "../Cast/Cast.module.css";

function Cast() {
  const [casts, setCasts] = useState([]);

  let params = useParams();
  const { movieId } = params;
  //   console.log(movieId);

  useEffect(() => {
    fetchCastMovie(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      <ul className={s.ul}>
        {casts &&
          casts.map((cast) => (
            <li className={s.li} key={cast.id}>
              <img
                className={s.img}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
                }
                alt={cast.original_name}
              />
              <p className={s.p}>{cast.original_name} </p>
              <p className={s.p}>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Cast;

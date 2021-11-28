import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCastMovie } from "../API/Api";

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
      <ul>
        {casts &&
          casts.map((cast) => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
                }
                alt={cast.original_name}
              />{" "}
              <br />
              {cast.original_name} <br />
              Character: {cast.character}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Cast;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewsMovie } from "../API/Api";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  let params = useParams();
  const { movieId } = params;
  //   console.log(movieId);

  useEffect(() => {
    fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map((review) => (
            <li key={review.id}>
              Author: {review.author} <br />
              {review.content}
            </li>
          ))}
      </ul>
    </>
  );
}

export default Reviews;

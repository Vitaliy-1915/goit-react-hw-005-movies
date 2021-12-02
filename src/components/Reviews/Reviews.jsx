import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviewsMovie } from "../API/Api";
import s from "../Reviews/Reviews.module.css";

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
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <p className={s.p}> Author: {review.author}</p>
              <p className={s.p}>{review.content}</p>
            </li>
          ))
        ) : (
          <h3 className={s.detailsPageH3}>No reviews for this movie </h3>
        )}
      </ul>
    </>
  );
}

export default Reviews;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/moviesAPI";
import Loader from "../Loader";

const Reviews = () => {
  const [reviews, setDetails] = useState({});
  const [isLoadedReviews, setIsLoadedReviews] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    onGettingMoveDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGettingMoveDetails = async () => {
    try {
      const response = await getMovieReviews(movieId);
      const resp = await response;
      setDetails(resp.data);

      setTimeout(() => {
        if (Object.keys(reviews).length === 0) {
          setIsLoadedReviews(true);
        }
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!isLoadedReviews && <Loader />}

      {isLoadedReviews && (
        <>
          {reviews.results.length ? (
            <ul>
              {reviews.results.map(({ id, author, content }) => {
                return (
                  <li key={id}>
                    <h5>Author: {author}</h5>
                    <p>{content}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;

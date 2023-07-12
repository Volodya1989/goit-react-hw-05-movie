import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../../api/moviesAPI";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  console.log("useParams", useParams());
  const { movieId } = useParams();
  console.log("moveId", movieId);

  useEffect(() => {
    console.log("rendered");
    onGettingMoveDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
  const onGettingMoveDetails = async () => {
    try {
      const response = await getMovieDetails(movieId);
      const resp = await response.data;
      setDetails(resp);
      console.log("movies", details);
      console.log("resp", resp);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Movie Details</h1>
      {/* <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default MovieDetails;

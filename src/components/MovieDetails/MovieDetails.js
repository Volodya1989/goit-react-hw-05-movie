import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/moviesAPI";
import Loader from "../Loader";

import {
  StyledText,
  StyledDetails,
  StyledGenresTitle,
} from "./MovieDetails.styled";
const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    onGettingMoveDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGettingMoveDetails = async () => {
    try {
      const response = await getMovieDetails(movieId);
      const resp = await response.data;
      setDetails(resp);
      console.log("details", details);
      console.log("resp", resp);
      setTimeout(() => {
        if (Object.keys(details).length === 0) {
          setIsLoaded(true);
        }
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!isLoaded && <Loader />}

      {isLoaded && (
        <>
          <StyledDetails>
            <img
              src={`https://image.tmdb.org/t/p/w200${details.poster_path}`}
              alt={details.title}
            />

            <div>
              <h2>
                {details.title} ({details.release_date.split("-")[0]})
              </h2>
              <p>
                User score: {Math.round(Number(details.vote_average) * 10)}%
              </p>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <StyledGenresTitle>Genres</StyledGenresTitle>
              <StyledText>
                {details.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </StyledText>
            </div>
          </StyledDetails>
          <p>Addtitonal Information</p>
          <ul>
            <li>Cast</li>
            <li>Review</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

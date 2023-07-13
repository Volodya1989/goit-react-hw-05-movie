import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../../api/moviesAPI";
import Loader from "../Loader";
import { BiSolidLeftArrow } from "react-icons/bi";

import {
  StyledText,
  StyledDetails,
  StyledGenresTitle,
  StyledList,
  StyledButton,
  StyledLink,
  Container,
} from "./MovieDetails.styled";
const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    onGettingMoveDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGettingMoveDetails = async () => {
    try {
      const response = await getMovieDetails(movieId);
      const resp = await response.data;
      setDetails(resp);
      // console.log("details", details);
      // console.log("resp", resp);
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
    <Container>
      {!isLoaded && <Loader />}

      {isLoaded && (
        <>
          <StyledLink to={backLinkRef.current}>
            <StyledButton type="button">
              <BiSolidLeftArrow />
              Go Back
            </StyledButton>
          </StyledLink>
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
          <StyledList>
            <Link to="cast">Cast</Link> <br />
            <Link to="reviews">Reviews</Link>
          </StyledList>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;

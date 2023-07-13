import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchMovie from "components/SearchMovie";
import Loader from "../../components/Loader";
import { getMovieOnSearch } from "../../api/moviesAPI";

const Movies = () => {
  const [queryParam, setQueryParam] = useState("");
  const [movies, setMovie] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (queryParam === "") {
      return;
    }
    console.log("queryParam", queryParam);
    onGettingMovies(queryParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParam]);

  const onGettingMovies = async (queryParam) => {
    try {
      const response = await getMovieOnSearch(queryParam);
      const resp = await response.data.results;
      setMovie(resp);
      setTimeout(() => {
        if (resp.length !== 0) {
          setIsLoaded(true);
          setMovie(resp);
          console.log("isLoaded", isLoaded);
          console.log("movies", movies);
        }
      }, 500);
      console.log("movies", movies);
      console.log("resp", resp);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (queryParam) => {
    setQueryParam(queryParam);
    setIsLoaded(false);
  };
  return (
    <div>
      <SearchMovie onSubmit={onSubmit} />
      {!isLoaded && queryParam && <Loader />}

      {isLoaded && (
        <>
          <ul>
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Movies;

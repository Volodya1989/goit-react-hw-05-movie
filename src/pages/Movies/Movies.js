import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import SearchMovie from "components/SearchMovie";
import Loader from "../../components/Loader";
import { getMovieOnSearch } from "../../api/moviesAPI";
import { Container } from "./Movies.styled";

const Movies = () => {
  const [queryParam, setQueryParam] = useState("");
  const [movies, setMovie] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (queryParam === "" && location.search === 0) {
      return;
    }

    onGettingMovies(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParam, location]);

  const onGettingMovies = async (queryParam) => {
    try {
      const response = await getMovieOnSearch(queryParam);
      const resp = await response.data.results;
      setMovie(resp);
      setTimeout(() => {
        if (resp.length !== 0) {
          setIsLoaded(true);
          setMovie(resp);
        }
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (queryParam) => {
    setSearchParams({});
    setQueryParam(queryParam);
    setIsLoaded(false);
    setSearchParams({ query: queryParam });
  };
  return (
    <div>
      <SearchMovie onSubmit={onSubmit} query={query} />
      {!isLoaded && queryParam && <Loader />}

      {isLoaded && (
        <>
          <Container>
            <ul>
              {movies.map((movie) => {
                return (
                  <li key={movie.id}>
                    <Link to={`${movie.id}`} state={{ from: location }}>
                      {movie.original_title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </>
      )}
    </div>
  );
};

export default Movies;

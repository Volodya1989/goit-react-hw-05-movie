import { useState, useEffect, lazy } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import { getMovieOnSearch } from "../../api/moviesAPI";
import { Container, StyledList, Item, StyledLink, Span } from "./Movies.styled";
import Notiflix from "notiflix";
import { FcFilmReel } from "react-icons/fc";

const SearchMovie = lazy(() =>
  import("components/SearchMovie").then((module) => {
    return module;
  })
);
const Movies = () => {
  const [queryParam, setQueryParam] = useState("");
  const [movies, setMovie] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "" || location.search === 0) {
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
      if (resp.length === 0) {
        setIsLoaded(true);
        setMovie(resp);
        return Notiflix.Notify.failure(
          "No movies were found. Please try again."
        );
      }
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
      <SearchMovie onSubmit={onSubmit} />
      {!isLoaded && queryParam && <Loader />}

      {isLoaded && (
        <>
          <Container>
            <StyledList>
              {movies.map((movie) => {
                return (
                  <Item key={movie.id}>
                    <StyledLink to={`${movie.id}`} state={{ from: location }}>
                      <Span>
                        <FcFilmReel />
                      </Span>
                      {movie.original_title}
                    </StyledLink>
                  </Item>
                );
              })}
            </StyledList>
          </Container>
        </>
      )}
    </div>
  );
};

export default Movies;

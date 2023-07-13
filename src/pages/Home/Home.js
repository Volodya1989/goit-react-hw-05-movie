import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, StyledList, Item, StyledLink, Span } from "./Home.styled";

import { getTrandingMovies } from "../../api/moviesAPI";
import { FcFilmReel } from "react-icons/fc";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    onGettingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGettingMovies = async () => {
    try {
      const response = await getTrandingMovies();
      const resp = await response.data.results;
      setMovies(resp);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <h1>Tranding Today</h1>
      <StyledList>
        {movies.map((movie) => {
          return (
            <Item key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
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
  );
};

export default Home;

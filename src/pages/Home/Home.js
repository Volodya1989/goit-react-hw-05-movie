import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Home.styled";

import { getTrandingMovies } from "../../api/moviesAPI";

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
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Home.styled";

import { getTrandingMovies } from "../../api/moviesAPI";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onGettingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGettingMovies = async () => {
    try {
      const response = await getTrandingMovies();
      const resp = await response.data.results;
      setMovies(resp);
      // console.log("movies", movies);
      // console.log("resp", resp);
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
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Home;

import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/`;
const PARAMS = `?language=en-US`;
const TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzVhZGRlNzJjYjZjNzkwMzkxMDhjYzE0Zjc2NzgyOSIsInN1YiI6IjY0YWUyNDMxOGEwZTliMDBlMzc1YTc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xeqs5DaMHOlE_quNyLNey2tG1GAeaLHSI5GGVan0qnI`;

const config = {
  headers: {
    Authorization: TOKEN,
    accept: "application/json",
  },
};
export async function getTrandingMovies() {
  return await axios.get(`${BASE_URL}trending/movie/day${PARAMS}`, config);
}

export async function getMovieDetails(movie_id) {
  return await axios.get(`${BASE_URL}movie/${movie_id}${PARAMS}`, config);
}

export async function getMovieReviews(movie_id) {
  return await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews${PARAMS}&page=1`,
    config
  );
}

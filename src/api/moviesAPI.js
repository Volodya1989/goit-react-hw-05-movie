import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3/trending/movie/`;
const PARAMS = `day?language=en-US`;
const TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzVhZGRlNzJjYjZjNzkwMzkxMDhjYzE0Zjc2NzgyOSIsInN1YiI6IjY0YWUyNDMxOGEwZTliMDBlMzc1YTc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xeqs5DaMHOlE_quNyLNey2tG1GAeaLHSI5GGVan0qnI`;

const config = {
  headers: {
    Authorization: TOKEN,
    accept: "application/json",
  },
};
async function getTrandingMovies() {
  return await axios.get(`${BASE_URL}${PARAMS}`, config);
}
export default getTrandingMovies;

import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/index";
import MovieDetails from "../MovieDetails";
import Home from "components/Home";
// 835adde72cb6c79039108cc14f767829
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Movie Details/Cast</div>} />
            <Route path="reviews" element={<div>Movie Details/Review</div>} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

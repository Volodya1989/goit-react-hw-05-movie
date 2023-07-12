import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/index";

const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() =>
  import("../MovieDetails").then((module) => {
    return module;
  })
);
const Reviews = lazy(() =>
  import("../Reviews").then((module) => {
    return module;
  })
);
const Cast = lazy(() =>
  import("../Cast").then((module) => {
    return module;
  })
);
// 835adde72cb6c79039108cc14f767829
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

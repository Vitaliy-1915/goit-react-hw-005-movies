import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./views/HomePageView/HomePage";
// import MoviesPage from "./views/MoviesPageView/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPageView/MovieDetailsPage";
// import NotFound from "./views/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

const HomePage = lazy(() =>
  import("./views/HomePageView/HomePage" /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPageView/MoviesPage" /* webpackChunkName: "movies-page" */
  )
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPageView/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const NotFound = lazy(() =>
  import("./views/NotFound/NotFound" /* webpackChunkName: "not-found" */)
);

function App() {
  return (
    <div className="App">
      <Navigation />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies/*" element={<MoviesPage />} />
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage animate={true} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

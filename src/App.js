import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePageView/HomePage";
import MoviesPage from "./views/MoviesPageView/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPageView/MovieDetailsPage";
import NotFound from "./views/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetailsPage props={Routes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

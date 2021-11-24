import { Route, Routes } from "react-router";
import HomePage from "./views/HomePageView/HomePage";
import MoviesPage from "./views/MoviesPageView/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPageView/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

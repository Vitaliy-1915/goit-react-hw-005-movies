import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

function MoviesPage() {
  const [MovieName, setMovieName] = useState(null);

  const formSubmit = (MovieName) => {
    setMovieName(null);
    setMovieName(MovieName);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar onSubmit={formSubmit} />
    </div>
  );
}

export default MoviesPage;

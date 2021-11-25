import { useState, useEffect } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;

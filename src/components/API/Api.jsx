import axios from "axios";

export const fetchTrendingMovies = async () => {
  try {
    const tredingFilms = await axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=ce78da2dcdc7fd14a3afc925f4e2f59d"
      )
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data.results);
    // console.log(tredingFilms);
    return tredingFilms;
  } catch (error) {
    console.error(error);
  }
};

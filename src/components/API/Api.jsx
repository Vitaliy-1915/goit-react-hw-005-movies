import axios from "axios";

const API_KEY = "ce78da2dcdc7fd14a3afc925f4e2f59d";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  try {
    const tredingFilms = await axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data.results);
    // console.log(tredingFilms);
    return tredingFilms;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDetailsMovie = async (movieId) => {
  // console.log(movieId);
  try {
    const DetailsMovie = await axios
      .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data);
    // console.log(DetailsMovie);
    return DetailsMovie;
  } catch (error) {
    console.error(error);
  }
};

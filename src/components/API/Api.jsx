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

export const fetchSearchMovies = async (MovieName) => {
  // console.log(MovieName);
  try {
    const searchFilms = await axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${MovieName}`
      )
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data.results);
    // console.log(searchFilms);
    return searchFilms;
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

export const fetchCastMovie = async (movieId) => {
  // console.log(movieId);
  try {
    const CastMovie = await axios
      .get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      )
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data.cast);
    // console.log(CastMovie);
    return CastMovie;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviewsMovie = async (movieId) => {
  // console.log(movieId);
  try {
    const ReviewsMovie = await axios
      .get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      // .then(response =>  console.log(response.data))
      .then(({ data }) => data.results);
    // console.log(ReviewsMovie);
    return ReviewsMovie;
  } catch (error) {
    console.error(error);
  }
};

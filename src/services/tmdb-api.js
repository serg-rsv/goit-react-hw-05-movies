import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// https://image.tmdb.org/t/p/w400/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';
const API_KEY = '5ce599886a4c0703a030654068991e03';

axios.defaults.baseURL = BASE_URL;

const getTrendingMovies = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(({ data: { results } }) =>
      results.map(({ id, title }) => ({ id, title }))
    )
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

const getSearchMovies = query => {};

const getMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => {
      const {
        id,
        title,
        release_date: releaseYear,
        poster_path: poster,
        overview,
        genres,
        vote_average: userScore,
      } = data;
      return {
        id,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        poster: IMAGE_URL + poster,
        overview,
        genres,
        userScore,
      };
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

const getMovieCredits = movieId => {};

const getMovieReviews = movieId => {};

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// https://image.tmdb.org/t/p/w400/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
const API_KEY = '5ce599886a4c0703a030654068991e03';

axios.defaults.baseURL = BASE_URL;

const getTrendingMovies = () => {
  return axios
    .get(`/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(({ data: { results } }) =>
      results.map(({ id, title }) => ({ id, title }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

const getSearchMovies = query => {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    )
    .then(({ data: { results } }) =>
      results.map(({ id, title }) => ({ id, title }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

const getMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${API_KEY}`)
    .then(
      ({
        data: {
          id,
          title,
          release_date: releaseYear,
          poster_path: poster,
          overview,
          genres,
          vote_average: userScore,
        },
      }) => ({
        id,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        poster: IMAGE_URL + poster,
        overview,
        genres,
        userScore: Math.round(userScore * 10),
      })
    )
    .catch(error => {
      console.log(error.message);
    });
};

const getMovieCredits = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(({ data: { cast } }) =>
      cast.map(({ id, name, character, profile_path: photo }) => ({
        id,
        name,
        character,
        photo: IMAGE_URL + photo,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

const getMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(({ data: { results } }) =>
      results.map(({ id, author, content }) => ({ id, author, content }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

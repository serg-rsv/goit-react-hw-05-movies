import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as api from 'services/tmdb-api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    api.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  console.log('movie', movie);

  const handleBack = () => {};

  const { id, title, releaseYear, poster, overview, genres, userScore } = movie;

  return (
    <>
      <button type="button" onClick={handleBack}>
        Go back
      </button>
      {movie && (
        <>
          <img src={poster} alt={title} />
          <h2>
            {title}({releaseYear})
          </h2>
          <p>User score: {userScore * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(' ')}</p>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import * as api from 'services/tmdb-api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('movieId');
  const location = useLocation();
  const navigate = useNavigate();

  const { title, releaseYear, poster, overview, genres, userScore } =
    movie ?? {};

  useEffect(() => {
    api.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleBack = () => {
    navigate(location.state.from);
  };

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
          <p>User score: {userScore}%</p>
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
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

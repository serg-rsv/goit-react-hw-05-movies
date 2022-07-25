import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/tmdb-api';

export const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    api.getTrendingMovies().then(setTrandingMovies);
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      {trandingMovies.length > 0 && (
        <ul>
          {trandingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

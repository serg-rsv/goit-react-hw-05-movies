import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/tmdb-api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const location = useLocation();

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
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

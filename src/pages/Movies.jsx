import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import * as api from 'services/tmdb-api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log('searchParams', searchParams);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await api.getSearchMovies(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h2>Movies</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/tmdb-api';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    api.getMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <ul>
      {credits.length > 0 &&
        credits.map(({ id, name, character, photo }) => {
          return (
            <li key={id}>
              <img src={photo} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

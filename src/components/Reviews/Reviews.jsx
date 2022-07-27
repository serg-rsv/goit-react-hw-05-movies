import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/tmdb-api';

export const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

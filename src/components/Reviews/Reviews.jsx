import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/tmdb-api';

import { ReviewsStyled } from 'components/Reviews/ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <ReviewsStyled key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </ReviewsStyled>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;

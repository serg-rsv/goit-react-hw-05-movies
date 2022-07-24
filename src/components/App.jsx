import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/movies" element={<h2>Movies</h2>} />
        <Route path="/movies/:movieId" element={<h2>MovieDetails</h2>}>
          <Route path="cast" element={<h3>Cast</h3>} />
          <Route path="reviews" element={<h3>Reviews</h3>} />
        </Route>
      </Routes>
    </>
  );
};

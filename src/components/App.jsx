import { Routes, Route } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { Home } from 'pages/Home';
import { GlobalStyle } from 'styles/GlobalStyle';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<h2>Movies</h2>} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<h3>Cast</h3>} />
            <Route path="reviews" element={<h3>Reviews</h3>} />
          </Route>
          <Route path="*" element={<h2>404 Not found :(</h2>} />{' '}
        </Route>
      </Routes>
    </>
  );
};

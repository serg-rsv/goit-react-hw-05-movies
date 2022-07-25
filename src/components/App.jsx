import { Routes, Route } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { GlobalStyle } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<h3>Cast</h3>} />
              <Route path="reviews" element={<h3>Reviews</h3>} />
            </Route>
          </Route>
          <Route path="*" element={<h2>404 Not found :(</h2>} />{' '}
        </Route>
      </Routes>
    </>
  );
};

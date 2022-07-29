import { lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'pages/Layout/Layout';
import { GlobalStyle } from 'styles/GlobalStyle';

const Home = lazy(() =>
  import('pages/Home/Home' /* webpackChunkName: "Home" */)
);
const Movies = lazy(() =>
  import('pages/Movies/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import(
    'components/MovieDetails/MovieDetails' /* webpackChunkName: "MovieDetails" */
  )
);
const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <>
              <h2>404 Not found :(</h2>
              <Link to="/">Back to home</Link>
            </>
          }
        />
      </Routes>
    </>
  );
};

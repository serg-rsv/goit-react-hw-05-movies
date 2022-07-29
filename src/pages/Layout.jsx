import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loading } from 'components/Loading/Loading';

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

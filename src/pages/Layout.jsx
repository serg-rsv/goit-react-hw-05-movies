import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </>
  );
};

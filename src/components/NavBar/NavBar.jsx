import { NavBarStyled, Link } from './NavBarStyled';

export const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </NavBarStyled>
    </>
  );
};

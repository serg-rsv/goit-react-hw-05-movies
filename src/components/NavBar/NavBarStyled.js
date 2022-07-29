import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyled = styled.nav`
  display: flex;
  gap: 12px;
  padding: 12px;
  margin-bottom: 4px;
  box-shadow: 0 2px 4px 0px gray;
`;

const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: crimson;
  }

  :hover:not(:active) {
    text-decoration: underline;
  }
`;

export { NavBarStyled, Link };

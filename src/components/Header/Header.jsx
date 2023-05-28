import { NavLink } from 'react-router-dom';
import { routes } from 'utils/routes';

export const Header = () => {
  return (
    <>
      <header>
        <NavLink to={routes.shops}>Shops</NavLink>
        <NavLink to={routes.basket}>Shopping Cart </NavLink>
      </header>
    </>
  );
};

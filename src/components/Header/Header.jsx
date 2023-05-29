import { routes } from 'utils/routes';
import { StyledHeader, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={routes.shops}>Shops</StyledLink>
      <StyledLink to={routes.basket}>Shopping Cart </StyledLink>
    </StyledHeader>
  );
};

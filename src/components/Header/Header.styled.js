import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px 3px #212121;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  padding: 8px;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: #ffa500;
  }

  &:hover,
  &:focus {
    color: #ffa500;
    outline: none;
  }
`;

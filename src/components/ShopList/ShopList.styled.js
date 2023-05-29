import styled from 'styled-components';

export const ShopsContainer = styled.div`
  border: 1px solid #212121;
  border-radius: 8px;

  padding: 8px;
`;

export const ShopsTitle = styled.h1`
  font-size: 16px;
  text-align: center;

  margin-bottom: 8px;
`;

export const ShopBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: ${({ isSelected }) => isSelected && '#ffa500'};

  width: 150px;
  height: 50px;

  margin-bottom: 8px;

  &:hover,
  &:focus {
    background-color: #ffa500;
  }
`;

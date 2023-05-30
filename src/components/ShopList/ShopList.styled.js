import styled from 'styled-components';

export const ShopsContainer = styled.div`
  max-height: calc(100vh - 2 * 20px - 35px - 30px);
  border: 1px solid #212121;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 3px #212121;
  overflow-x: hidden;
  overflow-y: scroll;

  padding: 20px;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
    margin: 8px;
  }

  &::-webkit-scrollbar {
    max-width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffa500;
    border-radius: 5px;
  }
`;

export const ShopsTitle = styled.h1`
  font-size: 16px;
  text-align: center;

  margin-bottom: 20px;
`;

export const ShopBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: ${({ isSelected }) => isSelected && '#ffa500'};

  width: 150px;
  height: 50px;

  margin-bottom: 20px;

  &:hover,
  &:focus {
    background-color: #ffa500;
  }
`;

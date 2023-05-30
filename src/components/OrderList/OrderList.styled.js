import styled from 'styled-components';

export const OrderContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

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

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

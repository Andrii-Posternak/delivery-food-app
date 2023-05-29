import styled from 'styled-components';

export const OrderContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-height: calc(100vh - 2 * 20px - 35px - 30px);
  border: 1px solid #212121;
  border-radius: 8px;
  overflow-y: scroll;

  padding: 20px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TotalPrice = styled.p`
  font-weight: 700;
  text-align: center;
`;

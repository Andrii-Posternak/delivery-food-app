import styled from 'styled-components';

export const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 200px;

  border: 1px solid #212121;
  border-radius: 4px;

  padding: 8px;
`;

export const ImageWrap = styled.div`
  width: 100%;
`;

export const FoodTitle = styled.h2`
  font-size: 16px;
  text-align: left;
`;

export const AddFoodBtn = styled.button`
  font-size: 16px;
  text-align: center;
  background-color: ${({ isSelected }) => isSelected && '#ffa500'};

  padding: 8px;

  &:hover {
    background-color: #ffa500;
  }
`;

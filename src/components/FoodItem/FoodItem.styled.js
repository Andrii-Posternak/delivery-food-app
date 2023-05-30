import styled from 'styled-components';

export const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  border: 1px solid #212121;
  border-radius: 4px;

  padding: 8px;

  &:hover {
    box-shadow: 0px 1px 13px #212121, 0px 0px 1px #212121;
    transition: 250ms linear;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 184px;
  border-radius: 4px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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

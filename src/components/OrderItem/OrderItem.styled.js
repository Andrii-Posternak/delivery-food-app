import styled from 'styled-components';

export const FoodCard = styled.div`
  position: relative;

  display: flex;
  gap: 10px;

  width: 400px;

  border: 1px solid #212121;
  border-radius: 4px;

  padding: 20px 8px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  font-size: 16px;

  padding: 8px;

  &:hover {
    background-color: red;
  }
`;

export const ImageWrap = styled.div`
  width: 200px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FoodTitle = styled.h2`
  font-size: 16px;
  text-align: left;
`;

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #212121;
  border-radius: 4px;

  padding: 8px;
`;

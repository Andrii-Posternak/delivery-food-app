import styled from 'styled-components';

export const StyledForm = styled.form`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 30px;

  border: 1px solid #212121;
  border-radius: 8px;

  padding: 20px 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #212121;
  border-radius: 4px;

  padding: 8px;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 2px #212121;
  }
`;

export const WrapButton = styled.div`
  flex: 1;
  display: flex;
`;

export const Button = styled.button`
  align-self: flex-end;

  font-size: 16px;
  font-weight: 500;
  text-align: center;

  width: 150px;
  height: 50px;

  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    background-color: #ffa500;
  }
`;

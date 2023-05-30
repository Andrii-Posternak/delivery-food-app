import styled from 'styled-components';

export const StyledForm = styled.form`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  max-height: calc(100vh - 2 * 20px - 35px - 30px);
  border: 1px solid #212121;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 3px #212121;
  overflow-x: hidden;
  overflow-y: scroll;

  padding: 20px 50px;

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

export const Button = styled.button`
  align-self: flex-end;

  font-size: 16px;
  font-weight: 500;
  text-align: center;

  width: 150px;
  min-height: 50px;

  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;

  &:hover,
  &:focus {
    background-color: #ffa500;
  }
`;

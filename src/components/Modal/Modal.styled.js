import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: #21212181;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  width: 480px;
  height: 30vh;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;

  padding: 8px;

  &:hover {
    background-color: #ffa500;
  }
`;

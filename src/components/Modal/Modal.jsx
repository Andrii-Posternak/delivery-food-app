import { useRef } from 'react';
import { Backdrop, Button, StyledModal, Text } from './Modal.styled';

export const Modal = ({ setIsModalOpen, orderNumber }) => {
  const numberRef = useRef();

  const copyToClipboard = elem => {
    const value = elem.current.textContent;

    navigator.clipboard.writeText(value).then(
      () => {
        console.log('your order number has been copied');
      },
      () => {
        console.log('An error has occurred');
      }
    );
  };

  return (
    <Backdrop>
      <StyledModal>
        <Text>Your order number:</Text>
        <Text ref={numberRef}>{orderNumber}</Text>
        <Button onClick={() => copyToClipboard(numberRef)}>copy number</Button>
        <Button onClick={() => setIsModalOpen(false)}>OK</Button>
      </StyledModal>
    </Backdrop>
  );
};

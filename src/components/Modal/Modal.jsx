import { useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Backdrop, Button, StyledModal, Text } from './Modal.styled';

export const Modal = ({ setIsModalOpen, orderNumber }) => {
  const numberRef = useRef();

  const copyToClipboard = elem => {
    const value = elem.current.textContent;

    navigator.clipboard.writeText(value).then(
      () => {
        Notify.success('your order number has been copied');
      },
      () => {
        Notify.failure('An error has occurred');
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

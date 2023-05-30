import { useState } from 'react';
import { OrderList } from 'components/OrderList/OrderList';
import { Form } from 'components/Form/From';
import { Modal } from 'components/Modal/Modal';
import { StyledContainer } from './ShoppingCartPage.styled';

export const ShoppingCartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  return (
    <>
      <StyledContainer>
        <Form setIsModalOpen={setIsModalOpen} setOrderNumber={setOrderNumber} />
        <OrderList />
      </StyledContainer>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} orderNumber={orderNumber} />
      )}
    </>
  );
};

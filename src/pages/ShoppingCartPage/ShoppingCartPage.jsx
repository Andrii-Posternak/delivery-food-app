import { OrderList } from 'components/OrderList/OrderList';
import { Form } from 'components/Form/From';
import { StyledContainer } from './ShoppingCartPage.styled';

export const ShoppingCartPage = () => {
  return (
    <StyledContainer>
      <Form />
      <OrderList />
    </StyledContainer>
  );
};

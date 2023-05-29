import { useOrder } from 'helpers/useContext';
import { OrderItem } from 'components/OrderItem/OrderItem';
import { CardList, OrderContainer, TotalPrice } from './OrderList.styled';

export const OrderList = () => {
  const { foodToOrder } = useOrder();

  const calcTotalPrice = () => {
    const total = foodToOrder.reduce((acc, { price, amount }) => {
      acc += price * amount;
      return +acc.toFixed(2);
    }, 0);
    return total;
  };

  return (
    <OrderContainer>
      <CardList>
        {foodToOrder.map(food => (
          <li key={food.id}>
            <OrderItem food={food} />
          </li>
        ))}
      </CardList>
      <TotalPrice>Total price: {calcTotalPrice()}$</TotalPrice>
    </OrderContainer>
  );
};

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
        {[...foodToOrder]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(food => (
            <li key={food._id}>
              <OrderItem food={food} />
            </li>
          ))}
      </CardList>
      {!foodToOrder.length ? (
        <TotalPrice>Nothing selected</TotalPrice>
      ) : (
        <TotalPrice>Total price: {calcTotalPrice()}$</TotalPrice>
      )}
    </OrderContainer>
  );
};

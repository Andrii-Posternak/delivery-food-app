import { useOrder } from 'helpers/useContext';
import { OrderItem } from 'components/OrderItem/OrderItem';

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
    <div>
      <ul>
        {foodToOrder.map(food => (
          <li key={food.id}>
            <OrderItem food={food} />
          </li>
        ))}
      </ul>
      <p>Total price: {calcTotalPrice()}$</p>
    </div>
  );
};

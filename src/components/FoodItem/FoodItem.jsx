import { useOrder } from 'helpers/useContext';
import BIG_MAC from '../../images/McDonalds/BIG_MAC.jpg';

export const FoodItem = ({ food }) => {
  const { id, name, price, imageURL } = food;
  const { foodToOrder, setFoodToOrder } = useOrder();

  const addToCart = food => {
    const newFood = { ...food, amount: 1 };
    setFoodToOrder([...foodToOrder, newFood]);
  };

  const isSelected = id => {
    return foodToOrder.some(food => food.id === id);
  };

  return (
    <div>
      <div>
        {/* <img src={imageURL} alt={name} width="100" /> */}
        <img src={BIG_MAC} alt={name} width="100" />
      </div>
      <p>{name}</p>
      <p>{price}</p>
      <button
        style={{ backgroundColor: isSelected(id) && 'green' }}
        onClick={() => addToCart(food)}
        disabled={isSelected(id)}
      >
        add to Cart
      </button>
    </div>
  );
};

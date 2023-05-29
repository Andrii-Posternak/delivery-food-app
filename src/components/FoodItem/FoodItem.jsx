import { useOrder } from 'helpers/useContext';
import BIG_MAC from '../../images/McDonalds/BIG_MAC.jpg';
import { AddFoodBtn, FoodCard, FoodTitle, ImageWrap } from './FoodItem.styled';

export const FoodItem = ({ food }) => {
  const { id, name, price, imageURL } = food;
  const { foodToOrder, setFoodToOrder } = useOrder();

  const addToCart = food => {
    const isContains = foodToOrder.some(food => food.id === id);
    if (isContains) {
      const filterdFood = foodToOrder.filter(food => food.id !== id);
      setFoodToOrder([...filterdFood]);
    } else {
      const newFood = { ...food, amount: 1 };
      setFoodToOrder([...foodToOrder, newFood]);
    }
  };

  const isSelected = id => {
    return foodToOrder.some(food => food.id === id);
  };

  return (
    <FoodCard>
      <ImageWrap>
        {/* <img src={imageURL} alt={name} width="100" /> */}
        <img src={BIG_MAC} alt={name} width="200" />
      </ImageWrap>
      <FoodTitle>{name}</FoodTitle>
      <p>{price}$</p>
      <AddFoodBtn
        type="button"
        onClick={() => addToCart(food)}
        isSelected={isSelected(id)}
      >
        add to Cart
      </AddFoodBtn>
    </FoodCard>
  );
};

import { useOrder } from 'helpers/useContext';
import { AddFoodBtn, FoodCard, FoodTitle, ImageWrap } from './FoodItem.styled';

export const FoodItem = ({ food }) => {
  const { _id, name, price, imageURL } = food;
  const { foodToOrder, setFoodToOrder } = useOrder();

  const addToCart = food => {
    const isContains = foodToOrder.some(food => food._id === _id);
    if (isContains) {
      const filterdFood = foodToOrder.filter(food => food._id !== _id);
      setFoodToOrder([...filterdFood]);
    } else {
      const newFood = { ...food, amount: 1 };
      setFoodToOrder([...foodToOrder, newFood]);
    }
  };

  const isSelected = id => {
    return foodToOrder.some(food => food._id === id);
  };

  return (
    <FoodCard>
      <ImageWrap>
        <img src={imageURL} alt={name} loading="lazy" />
      </ImageWrap>
      <FoodTitle>{name}</FoodTitle>
      <p>{price}$</p>
      <AddFoodBtn
        type="button"
        onClick={() => addToCart(food)}
        isSelected={isSelected(_id)}
      >
        add to Cart
      </AddFoodBtn>
    </FoodCard>
  );
};

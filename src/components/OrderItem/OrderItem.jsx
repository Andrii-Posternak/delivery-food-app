import { useState } from 'react';
import { useOrder } from 'helpers/useContext';
import {
  DeleteBtn,
  DescriptionWrap,
  FoodCard,
  FoodTitle,
  ImageWrap,
  Input,
} from './OrderItem.styled';

export const OrderItem = ({ food }) => {
  const { _id, name, price, imageURL, amount } = food;

  const [quantity, setQuantity] = useState(amount);

  const { foodToOrder, setFoodToOrder } = useOrder();

  const changeQuantity = quantity => {
    const changedFood = foodToOrder.map(food => {
      if (food._id === _id) {
        return {
          ...food,
          amount: quantity,
        };
      } else {
        return food;
      }
    });
    setFoodToOrder([...changedFood]);
  };

  const handleQuantity = event => {
    let { value } = event.target;
    if (value > 100) {
      value = 100;
    }
    if (value < 1) {
      value = 1;
    }
    setQuantity(value);
    changeQuantity(value);
  };

  const handleDeleteFood = id => {
    const changedFood = foodToOrder.filter(food => food._id !== id);
    setFoodToOrder([...changedFood]);
  };

  const calcTotal = () => {
    const total = price * amount;
    return +total.toFixed(2);
  };

  return (
    <FoodCard>
      <DeleteBtn type="button" onClick={() => handleDeleteFood(_id)}>
        x
      </DeleteBtn>
      <ImageWrap>
        <img src={imageURL} alt="food" loading="lazy" />
      </ImageWrap>
      <DescriptionWrap>
        <FoodTitle>{name}</FoodTitle>
        <p>Price: {price}$</p>
        <p>Total: {calcTotal()}$</p>
        <Input
          type="number"
          min="1"
          max="100"
          name="foodName"
          value={quantity}
          onChange={handleQuantity}
        />
      </DescriptionWrap>
    </FoodCard>
  );
};

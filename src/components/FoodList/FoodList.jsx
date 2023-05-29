import { FoodItem } from 'components/FoodItem/FoodItem';
import { foods } from 'DATA/FOOD_DATA';
import { CardList, FoodsContainer } from './FoodList.styled';

export const FoodList = ({ currentShop }) => {
  return (
    <FoodsContainer>
      <CardList>
        {foods.map(food => {
          if (currentShop === food.shop || currentShop === 'All') {
            return (
              <li key={food.id}>
                <FoodItem food={food} />
              </li>
            );
          }
        })}
      </CardList>
    </FoodsContainer>
  );
};

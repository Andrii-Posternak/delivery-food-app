import { FoodItem } from 'components/FoodItem/FoodItem';
import { foods } from 'DATA/FOOD_DATA';

export const FoodList = ({ currentShop }) => {
  return (
    <div>
      <ul>
        {foods.map(food => {
          if (currentShop === food.shop || currentShop === 'All') {
            return (
              <li key={food.id}>
                <FoodItem food={food} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

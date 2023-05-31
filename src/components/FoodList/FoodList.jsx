import { useEffect, useState } from 'react';
import {
  addToStorage,
  getFromStorage,
  STORAGE_KEYS,
} from 'helpers/localStorage';
import { getFoodsApi } from 'services/api';
import { FoodItem } from 'components/FoodItem/FoodItem';
import { CardItem, CardList, FoodsContainer } from './FoodList.styled';

export const FoodList = ({ currentShop }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    try {
      const foodsList = getFromStorage(STORAGE_KEYS.FOODS);
      if (foodsList) {
        setFoods(foodsList);
      } else {
        getFoodsApi().then(value => {
          setFoods(value);
          addToStorage(STORAGE_KEYS.FOODS, value);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <FoodsContainer>
      <CardList>
        {[...foods]
          .sort((a, b) => a.name.localeCompare(b.name))
          // eslint-disable-next-line array-callback-return
          .map(food => {
            if (currentShop === food.shop || currentShop === 'All') {
              return (
                <CardItem key={food._id}>
                  <FoodItem food={food} />
                </CardItem>
              );
            }
          })}
      </CardList>
    </FoodsContainer>
  );
};

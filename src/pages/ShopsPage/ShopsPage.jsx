import { useEffect, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import { FoodList } from 'components/FoodList/FoodList';
import { ShopList } from 'components/ShopList/ShopList';
import { StyledContainer } from './ShopsPage.styled';

export const ShopsPage = () => {
  const [currentShop, setCurrentShop] = useState('All');

  const { foodToOrder } = useOrder();

  useEffect(() => {
    if (foodToOrder.length) setCurrentShop(foodToOrder[0]?.shop);
  }, [foodToOrder]);

  return (
    <StyledContainer>
      <ShopList setCurrentShop={setCurrentShop} currentShop={currentShop} />
      <FoodList currentShop={currentShop} />
    </StyledContainer>
  );
};

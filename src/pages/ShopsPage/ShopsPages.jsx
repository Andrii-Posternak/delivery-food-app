import { useEffect, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import { FoodList } from 'components/FoodList/FoodList';
import { ShopList } from 'components/ShopList/ShopList';

export const ShopsPage = () => {
  const [currentShop, setCurrentShop] = useState('All');

  const { foodToOrder } = useOrder();

  useEffect(() => {
    if (foodToOrder.length) setCurrentShop(foodToOrder[0]?.shop);
  }, [foodToOrder]);

  return (
    <div>
      <ShopList setCurrentShop={setCurrentShop} />
      <FoodList currentShop={currentShop} />
    </div>
  );
};

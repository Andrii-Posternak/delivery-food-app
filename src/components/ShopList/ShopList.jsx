import { useEffect, useState } from 'react';
import { useOrder } from 'helpers/useContext';
import { getShopsApi } from 'services/api';
import { ShopBtn, ShopsContainer, ShopsTitle } from './ShopList.styled';

export const ShopList = ({ setCurrentShop, currentShop }) => {
  const [shops, setShops] = useState([]);
  const { foodToOrder } = useOrder();

  useEffect(() => {
    getShopsApi().then(value => {
      setShops(value);
    });
  }, []);

  const isDisabled = shopName => {
    if (foodToOrder.length && foodToOrder[0]?.shop !== shopName) return true;
    return false;
  };

  const isSelected = shopName => {
    if (currentShop === shopName) return true;
    return false;
  };

  return (
    <ShopsContainer>
      <ShopsTitle>Shops:</ShopsTitle>
      <ul>
        {[...shops]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(shop => {
            return (
              <li key={shop._id}>
                <ShopBtn
                  type="button"
                  onClick={() => setCurrentShop(shop.name)}
                  disabled={isDisabled(shop.name)}
                  isSelected={isSelected(shop.name)}
                >
                  {shop.name}
                </ShopBtn>
              </li>
            );
          })}
      </ul>
    </ShopsContainer>
  );
};

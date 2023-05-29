import { useOrder } from 'helpers/useContext';
import { shops } from 'DATA/SHOPS_DATA';
import { ShopBtn, ShopsContainer, ShopsTitle } from './ShopList.styled';

export const ShopList = ({ setCurrentShop, currentShop }) => {
  const { foodToOrder } = useOrder();

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
        {shops.map(shop => {
          return (
            <li key={shop.id}>
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

import { useOrder } from 'helpers/useContext';
import { shops } from 'DATA/SHOPS_DATA';

export const ShopList = ({ setCurrentShop }) => {
  const { foodToOrder } = useOrder();

  const isDisabled = shopName => {
    if (foodToOrder.length && foodToOrder[0]?.shop !== shopName) return true;

    return false;
  };

  return (
    <div>
      <h1>Shops:</h1>
      <ul>
        {shops.map(shop => {
          return (
            <li key={shop.id}>
              <button
                type="button"
                onClick={() => setCurrentShop(shop.name)}
                disabled={isDisabled(shop.name)}
              >
                {shop.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

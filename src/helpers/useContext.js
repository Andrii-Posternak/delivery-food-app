import { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [foodToOrder, setFoodToOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ foodToOrder, setFoodToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

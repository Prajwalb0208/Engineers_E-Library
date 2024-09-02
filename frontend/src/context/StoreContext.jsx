import React, { createContext, useState } from 'react';
import { books } from '../assets/assets';
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const contextValue = {
    books,
    cartItems,
    setCartItems
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

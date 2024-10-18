import { createContext, useState } from "react";

// ESTADOS GLOBALES

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
  };

  let data = { cart, addToCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

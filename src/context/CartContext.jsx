import { createContext, useState } from "react";

// ESTADOS GLOBALES

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const sumar = () => {};
  let data = { cart, sumar };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

import { createContext, useState } from "react";

// ESTADOS GLOBALES

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const clearCart = () => {
    setCart([]);
  };

  //Eliminar un producto
  const deleteProductById = (id) => {
    let filtred = cart.filter((product) => product.id !== id);
    setCart(filtred);
  };

  // Calcular total
  const getTotalAmount = () => {
    let totalAmount = cart.reduce((acumulador, product) => {
      return acumulador + product.price * product.quantity;
    }, 0);
    return totalAmount;
  };

  // total items -todos los productos- al widget
  const getTotalItems = () => {
    let totalItems = cart.reduce((acumulador, product) => {
      return acumulador + product.quantity;
    }, 0);
    return totalItems;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

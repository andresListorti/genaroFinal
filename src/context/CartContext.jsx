import { createContext, useState } from "react";

// ESTADOS GLOBALES

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
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

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

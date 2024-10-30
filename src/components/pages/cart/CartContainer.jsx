import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);
  // console.log(cart);

  return (
    <div>
      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
};

export default CartContainer;

import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <Cart />
    </div>
  );
};

export default CartContainer;

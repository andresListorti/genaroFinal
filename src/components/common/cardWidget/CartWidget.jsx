// import { FaCartShopping } from "react-icons/fa6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart, addToCart } = useContext(CartContext); // envia el objeto del value de contexto

  return (
    <>
      <Badge
        badgeContent={cart.length}
        max={50}
        color="primary"
        showZero={true}
      >
        {/* <FaCartShopping /> */}
        <ShoppingCartIcon />
      </Badge>
    </>
  );
};

export default CartWidget;

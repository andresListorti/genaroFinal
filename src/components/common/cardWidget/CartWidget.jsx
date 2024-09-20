// import { FaCartShopping } from "react-icons/fa6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={0} max={50} color="primary" showZero={true}>
        {/* <FaCartShopping /> */}
        <ShoppingCartIcon />
      </Badge>
    </>
  );
};

export default CartWidget;

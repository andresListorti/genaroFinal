import React from "react";
import { products } from "./../../../productsMock";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Cart = ({ cart, clearCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <h5>*******************************************************</h5>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <Card sx={{ width: 350, height: 280 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.imageUrl}
                title="pro"
              />
              <Typography gutterBottom variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                {"Precio: $ " + product.price}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                {"Cantidad: " + product.quantity}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                {"Subtotal: $ " + product.price * product.quantity}
              </Typography>
              <Button size="small">Eliminar</Button>
            </Card>
            <h5>***********************************************</h5>
          </div>
        );
      })}
      <Button variant="contained" onClick={clearCart}>
        Limpiar Carrito
      </Button>
    </div>
  );
};

export default Cart;

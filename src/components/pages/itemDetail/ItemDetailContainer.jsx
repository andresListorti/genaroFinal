import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./../../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  // agregar al Cart
  const onAdd = (quantity) => {
    let productoAlCarrito = { ...item, quantity };
    addToCart(productoAlCarrito);
  };

  return (
    <div>
      <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />
    </div>
  );
};

export default ItemDetailContainer;

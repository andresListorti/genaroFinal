import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
      // console.log(product);
    }
  }, [id]);

  // agregar al Cart
  const onAdd = (quantity) => {
    // console.log(quantity);
    // console.log(item);
    // console.log("Se agrego onAdd");
    let productoAlCarrito = { ...item, quantity };
    console.log(productoAlCarrito);
  };

  return (
    <div>
      <ItemDetail item={item} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;

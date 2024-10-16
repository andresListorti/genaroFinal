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
  const onAdd = (contador) => {
    console.log(contador);

    console.log(item);
    console.log("Se agrego onAdd");
  };

  return (
    <div>
      <ItemDetail item={item} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;

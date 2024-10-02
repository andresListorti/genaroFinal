import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const id = "2";

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
      //   console.log(product);
    }
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;

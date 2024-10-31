import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
// import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./../../../context/CartContext";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../../../config-firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let productCollection = collection(db, "producto");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
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

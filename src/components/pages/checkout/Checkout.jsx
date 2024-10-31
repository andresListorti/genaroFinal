import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import { db } from "../../../../config-firebase";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalAmount } = useContext(CartContext);

  const [orderId, SetOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Compra disparada");
    // console.log(user);
    let totalAmount = getTotalAmount();
    const order = {
      buyer: user,
      items: cart,
      total: totalAmount,
    };
    //console.log(order);
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      SetOrderId(res.id);
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {orderId ? (
        <h1>Su numero de Orden es: {orderId}</h1>
      ) : (
        <div>
          <h1>Checkout </h1>
          <h2>Proceso de compra </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              onChange={handleChange}
              name="name"
            />
            <input
              type="text"
              placeholder="telefono"
              onChange={handleChange}
              name="phone"
            />
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
            />
            <button>Comprar</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;

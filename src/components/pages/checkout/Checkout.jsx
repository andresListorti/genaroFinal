import React, { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Compra disparada");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
  };

  return (
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
  );
};

export default Checkout;

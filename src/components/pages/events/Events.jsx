import React from "react";

const Events = () => {
  //onSubmit
  //onChange

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento);
  };

  const handleInput = (evento) => {
    console.log(evento);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={handleInput} />
        <input type="text" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Events;

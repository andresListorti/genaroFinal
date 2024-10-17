import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

const Events = () => {
  const losTalles = [
    {
      label: "uno",
      value: "uno",
    },
    {
      label: "dos",
      value: "dos",
    },
    {
      label: "tres",
      value: "tres",
    },
    {
      label: "cuatro",
      value: "cuatro",
    },
  ];

  const [losColores, setLosColores] = useState([]);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    apellido: "",
    valueSelect: "",
  });

  //onSubmit
  //onChange

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // console.log(evento);
    console.log(nuevoProducto);
    console.log(losColores);
  };

  const handleChange = (evento) => {
    // console.log(evento);
    // console.log(evento.target.value);
    const { target } = evento;
    const { name, value } = target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const colores = (evento) => {
    console.log(evento.target.value);
    console.log(evento.target.checked);
    if (evento.target.checked) {
      setLosColores([...losColores, evento.target.value]);
    } else {
      const arrayFiltrado = losColores.filter(
        (color) => color !== evento.target.value
      );
      setLosColores(arrayFiltrado);
    }
  };

  // dentro del form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={handleChange}
          name="apellido"
        />
        <select onChange={handleChange} name="valueSelect" id="">
          {losTalles.map((product) => {
            return (
              <option
                key={product.label}
                label={product.label}
                value={product.value}
              />
            );
          })}
        </select>
        <div>
          <label>Negro</label>
          <input type="checkbox" value={"negro"} onChange={colores} />
          <label>azul</label>
          <input type="checkbox" value={"azul"} onChange={colores} />
          <label>Amarillo</label>
          <input type="checkbox" value={"amarillo"} onChange={colores} />
        </div>

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default Events;

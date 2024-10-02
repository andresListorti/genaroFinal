import { useState } from "react";
import { Button } from "@mui/material";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const handleSumar = () => {
    setContador(contador + 1);
  };
  const handleRestar = () => {
    setContador(contador - 1);
  };
  const handleReset = () => {
    setContador(0);
  };

  return (
    <>
      <h2>{contador}</h2>
      <div
        style={{
          // marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Button onClick={handleSumar} variant="contained">
          Sumar
        </Button>
        <Button onClick={handleRestar} variant="contained">
          Restar
        </Button>
      </div>
      <Button variant="outlined">Agregar al Carrito</Button>
    </>
  );
};

export default Counter;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Counter = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const navigate = useNavigate();
  // console.log(navigate);

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
      <Button
        variant="outlined"
        onClick={() => {
          // console.log("Se agrego al carrito");
          onAdd(contador);
          navigate("/cart");
        }}
      >
        Agregar al Carrito
      </Button>
    </>
  );
};

export default Counter;

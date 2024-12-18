import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Counter = ({ onAdd, stock, totalItems }) => {
  const [contador, setContador] = useState(totalItems);
  const [deshabilitado, setDeshabilitado] = useState(false);

  const navigate = useNavigate();
  // console.log(navigate);

  const handleSumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock Maximo");
    }
  };

  const handleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No puedes agregar menos de 1");
    }
  };

  // const handleReset = () => {
  //   setContador(1);
  // };

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
        <Button
          onClick={handleSumar}
          variant="contained"
          // disabled={contador === stock ? !deshabilitado : deshabilitado}
        >
          Sumar
        </Button>
        <Button
          onClick={handleRestar}
          variant="contained"
          disabled={contador === 1 ? !deshabilitado : deshabilitado}
        >
          Restar
        </Button>
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          //console.log("Se agrego al carrito");
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

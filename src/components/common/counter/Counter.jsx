import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

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
    <div>
      <h1>Counter</h1>
      <h2>{contador}</h2>
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  );
};

export default Counter;

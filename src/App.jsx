// import { useState } from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Counter from "./components/common/counter/counter";

// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const saludo = "Saludo personalizado para Greeting pasado por prop";
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer greeting={saludo} />
        <Counter />
      </div>
    </>
  );
}

export default App;

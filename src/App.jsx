// import { useState } from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;

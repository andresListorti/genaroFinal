import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Counter from "./components/common/counter/counter";

// import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer />
        <Counter />
      </div>
    </>
  );
}

export default App;

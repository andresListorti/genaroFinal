import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Counter from "./components/common/counter/counter";
import PruebaGrid from "./components/common/pruebaGrid/PruebaGrid";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Comments from "./components/Comments";

// import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
        {/* <Counter /> */}
        <Comments />
        {/* <PruebaGrid /> */}
      </div>
    </>
  );
}

export default App;

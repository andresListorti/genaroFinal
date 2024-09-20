import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Counter from "./components/common/counter/counter";
import PruebaGrid from "./components/common/pruebaGrid/PruebaGrid";

// import "./App.css";
import FetchingDataContainer from "./components/pages/fetchingData/FetchingDataContainer";

function App() {
  // fetch("https://jsonplaceholder.org/users")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((e) => console.log(e));
  return (
    <>
      <div>
        {/* <Navbar />
        <ItemListContainer /> */}
        {/* <Counter /> */}
        {/* <PruebaGrid /> */}
        <FetchingDataContainer />
      </div>
    </>
  );
}

export default App;

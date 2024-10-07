import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/footer/Footer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CollectionContainer from "./components/pages/collections/CollectionContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route
          path={"/category/:categoryName"}
          element={<ItemListContainer />}
        />
        {/* <Route path={"/category"} element={<CollectionContainer />} /> */}

        <Route path={"/cart"} element={<CartContainer />} />
        <Route path={"/login"} element={<h2>Login</h2>} />
        <Route path={"/register"} element={<h2>registro</h2>} />

        <Route path={"/productDetail/:id"} element={<ItemDetailContainer />} />

        <Route path={"*"} element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

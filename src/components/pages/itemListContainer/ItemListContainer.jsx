import ProductCard from "../../common/productCard/ProductCard";
import imagen from "../../../resources/woman-2179062_1920.jpg";
import imagen2 from "../../../resources/footwear-1838767_1920.jpg";
import { Message } from "@mui/icons-material";
import { products } from "../../../productsMock";

const ItemListContainer = ({ greeting }) => {
  //fetch
  // declaro la promesa
  const getProducts = new Promise((res, rej) => {
    let isLogued = true;
    if (isLogued) {
      res(products);
    } else {
      rej({ message: "Error mio" });
    }
  });

  console.log(getProducts);

  // manejo la promesa
  getProducts
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("Finally"));

  return (
    <div>
      {/* Greeting */}
      <h4>{greeting}</h4>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="Modelo E999" precio={20} foto={imagen} />
        <ProductCard titulo="Modelo E898" precio={10} foto={imagen2} />
      </div>
    </div>
  );
};

export default ItemListContainer;

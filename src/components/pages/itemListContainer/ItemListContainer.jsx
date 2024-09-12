// import ProductCard from "../../common/productCard/ProductCard";
// import imagen from "../../../resources/woman-2179062_1920.jpg";
// import imagen2 from "../../../resources/footwear-1838767_1920.jpg";
// import { Message } from "@mui/icons-material";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
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

    // manejo la promesa
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(console.log("Finally"));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;

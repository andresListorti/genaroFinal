// import ProductCard from "../../common/productCard/ProductCard";
// import imagen from "../../../resources/woman-2179062_1920.jpg";
// import imagen2 from "../../../resources/footwear-1838767_1920.jpg";
// import { Message } from "@mui/icons-material";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { products } from "./../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams(); // siempre va a ser un objeto {} o {categoryName} o undefined si hay categoria que no existe
  // console.log(categoryName);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
    //fetch
    // declaro la promesa
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
        // res(products);
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
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

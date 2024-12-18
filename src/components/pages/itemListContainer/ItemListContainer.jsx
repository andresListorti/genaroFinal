// import ProductCard from "../../common/productCard/ProductCard";
// import imagen from "../../../resources/woman-2179062_1920.jpg";
// import imagen2 from "../../../resources/footwear-1838767_1920.jpg";
// import { Message } from "@mui/icons-material";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { products } from "./../../../productsMock";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config-firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams(); // siempre va a ser un objeto {} o {categoryName} o undefined si hay categoria que no existe
  //console.log(categoryName);

  useEffect(() => {
    const itemsCollection = collection(db, "producto");
    let consulta = itemsCollection;
    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    }
    getDocs(consulta).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    console.log(items);
  }, [categoryName]);

  const agregarProductos = () => {
    products.forEach((producto) => {
      addDoc(collection(db, "producto"), producto);
    });
  };

  return (
    <>
      <ItemList items={items} />
      {/* <button onClick={agregarProductos}>Agregar</button> */}
    </>
  );
};

export default ItemListContainer;

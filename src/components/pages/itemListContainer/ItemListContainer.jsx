import ProductCard from "../../common/productCard/ProductCard";
import imagen from "../../../resources/woman-2179062_1920.jpg";
import imagen2 from "../../../resources/footwear-1838767_1920.jpg";

const ItemListContainer = ({ greeting }) => {
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

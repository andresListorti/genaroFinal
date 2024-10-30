import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* <h1>Listado de productos</h1> */}
      {items.map((item, index) => {
        return (
          <ProductCard
            key={item.id}
            // title={item.title}
            // price={item.price}
            // image={item.imageUrl}
            // description={item.description}
            {...item} // cuando son muchas props conviene pasar un objeto con el spred de lo que quiero
          />
        );
      })}
    </div>
  );
};

export default ItemList;

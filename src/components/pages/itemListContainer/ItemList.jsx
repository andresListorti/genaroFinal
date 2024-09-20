import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  //   console.log(items[0].title);

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

      {/* <ProductCard
        key={items[1].id}
        titulo={items[1].title}
        precio={items[1].price}
        foto={items[1].imageUrl}
      />
      <ProductCard
        key={items[2].id}
        titulo={items[2].title}
        precio={items[2].price}
        foto={items[2].imageUrl}
      /> */}
    </div>
  );
};

export default ItemList;

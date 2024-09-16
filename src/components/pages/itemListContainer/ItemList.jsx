import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  //   console.log(items[0].title);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* <h1>Listado de productos</h1> */}
      {items.map((item, index) => {
        return (
          <ProductCard
            key={index}
            titulo={item.title}
            precio={item.price}
            foto={item.imageUrl}
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

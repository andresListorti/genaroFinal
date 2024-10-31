import React from "react";
import ProductCard from "../../common/productCard/ProductCard";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  //   console.log(item);

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {/* <h2>Ya tienes {totalItems} unidades en el carrito</h2> */}
      <ProductCard key={item.id} {...item} />
      <Counter onAdd={onAdd} stock={item.stock} totalItems={totalItems} />
    </div>
  );
};

export default ItemDetail;

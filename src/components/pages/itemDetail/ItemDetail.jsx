import React from "react";
import ProductCard from "../../common/productCard/ProductCard";
import Counter from "../../common/counter/counter";

const ItemDetail = ({ item, onAdd }) => {
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
      <ProductCard key={item.id} {...item} />
      <Counter onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;

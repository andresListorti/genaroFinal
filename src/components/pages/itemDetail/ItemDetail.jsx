import React from "react";
import ProductCard from "../../common/productCard/ProductCard";
import Counter from "../../common/counter/counter";

const ItemDetail = ({ item }) => {
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
      <Counter />
    </div>
  );
};

export default ItemDetail;

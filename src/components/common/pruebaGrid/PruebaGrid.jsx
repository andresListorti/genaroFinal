import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { styles } from "./styles";
import ProductCard from "../productCard/ProductCard";
import ItemList from "../../pages/itemListContainer/ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

const PruebaGrid = () => {
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
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "red", padding: "10px" }}>Caja1</h2>
        <ItemList items={items} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "blue" }}>Caja2</h2>
        <Button color="secondary" variant="contained">
          Suma
        </Button>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography variant="h2" sx={styles.caja3}>
          Caja3
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PruebaGrid;

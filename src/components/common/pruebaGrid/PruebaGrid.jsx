import Grid from "@mui/material/Grid2";
import React from "react";

const PruebaGrid = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "red" }}>Caja1</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "blue" }}>Caja2</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "green" }}>Caja3</h2>
      </Grid>
    </Grid>
  );
};

export default PruebaGrid;

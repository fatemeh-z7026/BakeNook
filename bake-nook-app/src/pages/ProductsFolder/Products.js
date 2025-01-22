import React from "react";
import ProductCard from "../../components/ProductCard";
import mainProductData from "../../data/mainProductDataFile.json";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

const ProductCardData = mainProductData.mainProductData;
export default function Products() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ProductCardData.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}
          sx={{width:'250px'}}
>
            <ProductCard
              key={product.id}
              name={product.name}
              img={product.img}
              description={product.description}

            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

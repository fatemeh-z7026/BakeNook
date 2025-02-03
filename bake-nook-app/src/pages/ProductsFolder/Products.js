import React from "react";
import ProductCard from "../../components/ProductCard";
import mainProductData from "../../data/productDatas.json";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom"; // Import Link
import { Outlet } from "react-router-dom";

const ProductCardData = mainProductData.mainProductData;

export default function Products() {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ProductCardData.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ width: "250px" }}
          >
<Link className="product-card-link" to={product.path}>
              <ProductCard
                name={product.label}
                img={product.img}
                description={product.description}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    <Outlet></Outlet>
      
    </Box>
  );
}

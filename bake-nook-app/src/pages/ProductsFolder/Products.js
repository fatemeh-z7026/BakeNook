import React from "react";
import ProductCard from "../../components/ProductCard";
import mainProductData from "../../data/mainProductDataFile.json";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const ProductCardData = mainProductData.mainProductData;
export default function Products() {


  return (
    <Box
      sx={{
        minHeight: "100vh", // تغییر از height به minHeight
        display: "flex",
        flexDirection: "column", // برای ساختار عمودی
        justifyContent: "center",
        alignItems: "center",
        padding: 2, // اضافه کردن فاصله داخلی
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {ProductCardData.map((product) => (
          <Grid
            key={product.id} // اضافه کردن key به Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ width: "250px" }}
          >
            <ProductCard
              name={product.name}
              img={product.img}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>

      {/* مسیرهای فرزند */}
      <Box sx={{ width: "100%", marginTop: 4}}>
        <Outlet />
      </Box>
    </Box>
  );
}

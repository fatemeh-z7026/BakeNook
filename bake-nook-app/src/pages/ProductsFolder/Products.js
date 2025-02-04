import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import mainProductData from "../../data/productDatas.json";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom"; // Import Link
import { Outlet } from "react-router-dom";
import "../../styles/ProductCard.css";

const ProductCardData = mainProductData.mainProductData;

export default function Products() {
  const [activeId, setActiveId] = useState(null);
  const location = useLocation(); // Get current location
  useEffect(() => {
    if (location.pathname === "/products") {
      setActiveId(null); // Reset activeId only when on the products list page
    }
  }, [location]);
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
        {ProductCardData.map((product) => {
          const isInactive = activeId !== null && activeId !== product.id; // Calculate inactive state

          return (
            <Grid
              key={product.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ width: "250px" }}
            >
              <Link
                className="product-card-link "
                onClick={() => setActiveId(product.id)} // Set active product ID
                to={product.path}
              >
                <ProductCard
                  name={product.label}
                  img={product.img}
                  description={product.description}
                  isInactive={isInactive} // Pass inactive state
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Outlet />
    </Box>
  );
}

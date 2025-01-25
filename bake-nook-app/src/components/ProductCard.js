import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import routes from "../routes";


export default function ActionAreaCard({ id ,name, img, description }) {
  const productRoute = routes
    .find((route) => route.label === "Products")
    ?.children?.find((child) => child.label === name)?.path;

    

  return (
    <Link to={productRoute || "#"} className="product-card-link"> <Card
    className="product-card"
    sx={{ backgroundColor: "customColors.cardBackground" }}
 >

    <CardActionArea>
      <CardHeader />
      <CardMedia component="img" height="100" image={img} alt={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "text.primary" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card></Link>
   
  );
}

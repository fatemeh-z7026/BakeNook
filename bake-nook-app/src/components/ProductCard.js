import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "../styles/ProductCard.css";

export default function ActionAreaCard({
  id,
  name,
  img,
  description,
  isInactive,
}) {
  return (
    <div className={`product-card ${isInactive ? "inactiveStyle" : ""}`}>
      {" "}
      <Card sx={{ backgroundColor: "customColors.cardBackground" }}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={img} alt={name} />
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
      </Card>
    </div>
  );
}

import React from "react";
import { Box } from "@mui/material";

export default function Swiper() {
  const swiperImg = [
    { id: 1, src: "/swiper-img/cake.png", alt: "Cake" },
    { id: 2, src: "/swiper-img/dessert.png", alt: "Dessert" },
    { id: 3, src: "/swiper-img/bakery.png", alt: "Bakery" },
    { id: 4, src: "/swiper-img/cookie.png", alt: "Cookie" },
  ];

  return (
    <Box
    sx={{ width: "100%",  aspectRatio: "16/9", overflow: "hidden", display:'flex', flexDirection:'column' }}
      gap={2}
      
    >
      {swiperImg.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
}

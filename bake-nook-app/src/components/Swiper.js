import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Swiper() {
  const theme = useTheme();

  const swiperImg = [
    { id: 1, src: "/swiper-img/cake.png", alt: "Cake" },
    { id: 2, src: "/swiper-img/bakery.png", alt: "Bakery" },
    { id: 3, src: "/swiper-img/dessert.png", alt: "Dessert" },
    { id: 4, src: "/swiper-img/cookie.png", alt: "Cookie" },
  ];

  //Icon shared style
  const iconStyles = {
    position: "fixed",
    top: "65%",
    transform: "translateY(-60%)",
    fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
    cursor: "pointer",
    zIndex: 2,
    color: "customColors.paperLighter",
    [theme.breakpoints.down("sm")]: {
      top: "47%",
      fontSize: "3rem",
    },
  };

  //Handle swiper
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === swiperImg.length - 1 ? 0 : prevIndex + 1),
      console.log("132")
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? swiperImg.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "88vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          key={swiperImg[currentIndex].id}
          src={swiperImg[currentIndex].src}
          alt={swiperImg[currentIndex].alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <ArrowBackIosNewIcon
        onClick={handlePrev}
        sx={{ ...iconStyles, left: { xs: ".5rem", sm: "1rem", md: "3rem" } }}
      />
      <ArrowForwardIosIcon
        onClick={handleNext}
        sx={{ ...iconStyles, right: { xs: ".5rem", sm: "1rem", md: "3rem" } }}
      />
    </>
  );
}

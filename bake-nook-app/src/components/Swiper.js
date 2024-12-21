import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../styles/Swiper.css";

export default function Swiper() {
  const theme = useTheme();

  const swiperImg = [
    {
      id: 1,
      src: "/swiper-img/cake.png",
      alt: "Cake",
      description:
        "Experience pure indulgence with our Yummy Cake. Pure deliciousness in every slice!",
      title: "Yummy Cake",
    },
    {
      id: 2,
      src: "/swiper-img/bakery.png",
      alt: "Bakery",
      description:
        "Baked to perfection daily,our Fresh Bread boasts a golden, crispy crust and a soft, fluffy interior.Freshness in every bite.Perfect for any meal.",
      title: "Fresh Bread",
    },
    {
      id: 3,
      src: "/swiper-img/dessert.png",
      alt: "Dessert",
      description:
        "Treat yourself to pure bliss with our Luscious Dessert. Every bite is a delightful escape into dessert heaven.",
      title: "Luscious Dessert",
    },
    {
      id: 4,
      src: "/swiper-img/cookie.png",
      alt: "Cookie",
      description:
        "Savor the perfect balance of taste and texture with our Flavorful Cookie. Every bite is a delightful moment of sweetness and joy.",
      title: "Flavorful Cookie",
    },
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
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [titleClass, setTitleClass] = useState("slide-down");
  const [descriptionClass, setDescriptionClass] = useState("slide-up");
    useState("slide-up");

  const handleNext = () => {
    setFadeClass("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === swiperImg.length - 1 ? 0 : prevIndex + 1
      );
      setFadeClass("fade-in");
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass("fade-out");

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? swiperImg.length - 1 : prevIndex - 1
      );
      setFadeClass("fade-in");
    }, 500);
  };

  const reapplyAnimations = () => {
    setTitleClass(""); // Temporarily clear the animation class
    setDescriptionClass("");
  
    setTimeout(() => {
      setTitleClass("slide-down"); // Reapply the animation class
      setDescriptionClass("slide-up");
    }, 500); // Small delay to ensure class removal 
  };
  
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); 
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  useEffect(() => {
    const animationInterval = setInterval(() => {
      reapplyAnimations();
    }, 5000); 
  
    return () => clearInterval(animationInterval); // Cleanup on component unmount
  }, []);
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "88vh",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "customColors.headerColor",
        }}
      >
        <img
          key={swiperImg[currentIndex].id}
          src={swiperImg[currentIndex].src}
          alt={swiperImg[currentIndex].alt}
          className={fadeClass}
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
      {/* Caption */}
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          maxWidth: "450px",
          top: "60%",
          left: "30%",
          transform: "translate(-50%, -60%)",
          zIndex: 2,
          textAlign: "left",
          fontFamily: ' "Merienda", cursive;',
          [theme.breakpoints.down("sm")]: {
            top: "45%",
            left: "35%",
            fontSize: "1rem",
            maxWidth: "250px",
          },
          [theme.breakpoints.down("xs")]: {
            top: "40%",
            fontSize: "1.2rem",
          },
        }}
      >
        <h2 className={titleClass}>{swiperImg[currentIndex].title}</h2>
        <p className={descriptionClass}>
          {swiperImg[currentIndex].description}
        </p>
      </Box>
    </>
  );
}

import React from "react";
import Carousel from "react-material-ui-carousel";

import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
const CustomCaraousel = ({ slides, showDots }) => {
  const Img = styled("img")(({ height, width }) => ({
    objectFit: "cover",
    width: width || "100%",
    height: height || "100%",
  }));

  return (
    <Carousel
      navButtonsAlwaysVisible="true"
      autoPlay="true"
      animation="slide"
      sx={{
        marginTop: "1rem",
      }}
      indicatorIconButtonProps={{
        style: {
          color: "rgb(169, 169, 169)",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#ffffff",
        },
      }}
      indicatorContainerProps={{
        style: {
          zIndex: 1,

          bottom: "5px  ",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "10px",
          color: "#ffffff",
          background: "rgba(40, 36, 36, 0.2)",
          width: 100,
          height: "auto",
          padding: "1px",
          borderRadius: "50px",

          margin: "auto",
          display: showDots ? "block" : "none",
        },
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "#ffffff",
          borderRadius: "1px",
          color: "#494949",
          margin: 0,
          width: 40,
          height: 80,
        },
      }}
    >
      {slides &&
        slides?.map((slide, i) => (
          <>
            {slide.image && (
              <Img
                src={slide.image}
                alt="carousel"
                height={slide.height}
                width={slide.width}
              />
            )}
            {slide.description && <Typography>{slide.description}</Typography>}
            {slide.label && <Typography>{slide.label}</Typography>}
          </>
        ))}
    </Carousel>
  );
};

export default CustomCaraousel;

import React from "react";
import { ElectronicsData } from "../constant";
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Typography } from "@mui/material";
import Card from "../utils/Card";

const Electronics = () => {
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(ElectronicsData.length / itemsPerPage);

  const slides = Array.from({ length: totalSlides }, (_, pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slideItems = ElectronicsData.slice(startIndex, endIndex);

    return (
      <Box
        key={pageIndex}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {slideItems.map((slide, i) => (
          <Card {...slide} key={i} />
        ))}
      </Box>
    );
  });

  return (
    <Box
      p={3}
      mt={5}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "5px",
      }}
    >
      <Typography
        variant="h6"
        color="black"
        sx={{
          fontSize: "1rem",
          fontWeight: "600",
          letterSpacing: "0.5px",
          marginBottom: "0.5rem",
        }}
      >
        Best Electronics
      </Typography>
      <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        animation="slide"
        sx={{
          marginTop: "1rem",
        }}
        indicatorContainerProps={{
          style: {
            display: "none",
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
        {slides}
      </Carousel>
    </Box>
  );
};

export default Electronics;

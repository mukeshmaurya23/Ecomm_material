import React from "react";

import ProductsBanner from "./ProductsBanner";

import { Box } from "@mui/material";
import ImageSlider from "./ImageSlider";
import Electronics from "./Electronics";
import Footer from "./Footer";
import GridSystem from "./GridSystem";

const MainConatiner = () => {
  return (
    <>
      <Box bgcolor="#dfe6e9" p={1}>
        <ProductsBanner />
        <ImageSlider />
        <Electronics />
        <GridSystem />
      </Box>
      <Footer />
    </>
  );
};

export default MainConatiner;

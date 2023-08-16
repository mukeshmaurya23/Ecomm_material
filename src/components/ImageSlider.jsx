import React from "react";
import CustomCaraousel from "../utils/CustomCaraousel";
import { items } from "../constant";
const ImageSlider = () => {
  const imageSlides = items.map((item) => ({
    image: item.image,
  }));
  return <CustomCaraousel slides={imageSlides} showDots={true} />;
};

export default ImageSlider;

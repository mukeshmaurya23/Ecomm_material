import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { AvailableItemsData } from "../constant";
const ProductsBanner = () => {
  return (
    <Stack
      direction="row"
      bgcolor="white"
      justifyContent="space-evenly"
      alignItems="center"
      p={3}
    >
      {AvailableItemsData.map((product) => {
        return (
          <Stack
            direction="column"
            spacing={1}
            key={product?.id}
            sx={{
              cursor: "pointer",
            }}
          >
            <img
              src={product?.src}
              alt="product"
              style={{
                width: "60px",
                height: "60px",
              }}
            />
            <Typography
              variant="h6"
              color="black"
              sx={{
                fontSize: "0.8rem",
                textAlign: "center",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              {product?.title}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProductsBanner;

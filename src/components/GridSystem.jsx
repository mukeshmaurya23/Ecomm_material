import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { RakhiData } from "../constant";
import Card from "../utils/Card";
const GridSystem = () => {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={2} mt={2}>
      <Box flex={8} bgcolor="white" px={2} py={1}>
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
          Rakhi Gifting Specials
        </Typography>
        <Grid container spacing={2} gap={4} p={2}>
          {RakhiData.map((product) => {
            return <Card {...product} key={product?.id} />;
          })}
        </Grid>
      </Box>
      <Box flex={1} width={820}>
        <img
          src="https://rukminim1.flixcart.com/www/1070/760/promos/22/05/2023/6350965b-ae8b-4b2a-a298-2ce4c7371f0d.jpg?q=80"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  );
};

export default GridSystem;

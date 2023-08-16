import { Paper, Typography } from "@mui/material";
import React from "react";

const Card = ({ image, label, description }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        padding: "1rem",
        height: "260px",
        width: "240px",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt="carousel"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
        }}
      />

      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: "500",
          marginTop: "0.5rem",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.8rem",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
};

export default Card;

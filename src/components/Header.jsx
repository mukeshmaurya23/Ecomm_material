import { Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        position={"sticky"}
        sx={{
          bgcolor: theme.palette.background.navColor.default,
          padding: "10px 0px 10px 0px",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack direction="column" spacing={1}>
          <Typography color="whiteColor">Flipkart</Typography>
          <Typography color="whiteColor">Explore Plus</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

import styled from "@emotion/styled";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  MoreVert,
  PersonOutline,
  Search,
  ShoppingCart,
  Storefront,
} from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchDiv = styled("div")({
  backgroundColor: "#f0f5ff",
  display: "flex",
  width: "50%",
  borderRadius: "5px",
  position: "relative",
});

const SearchInput = styled("input")({
  border: "none",

  height: "40px",
  outline: "none",
  width: "100%",
  margin: "0px 30px 0px 30px",
  padding: "0px 10px 0px 10px",
  fontSize: "1.2rem",
  "&:focus": {
    border: "none",
    outline: "none",
  },
  "&::placeholder": {
    fontSize: "1rem",
  },
  background: "transparent",
});

const CustomDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  cursor: "pointer",
});
const CustomTypography = styled(Typography)({
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "4px",
});
const SearchBar = ({ placeholder }) => {
  return (
    <SearchDiv>
      <Search
        sx={{
          color: "gray",
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
        }}
      />
      <SearchInput placeholder={placeholder} />
    </SearchDiv>
  );
};
const HeadingDiv = styled("div")({
  cursor: "pointer",
});

const Navbar = () => {
  return (
    <AppBar position="sticky" color="whiteColor">
      <Box
        sx={{
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <StyledToolbar>
          <HeadingDiv>
            <img
              style={{
                width: "84%",
              }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
            />
            <Typography
              variant="h6"
              color="gray"
              sx={{
                marginLeft: "2.5rem",
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              Explore{" "}
              <span style={{ color: "#ffc200", marginRight: "5px" }}>Plus</span>
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" />
            </Typography>
          </HeadingDiv>
          <SearchBar placeholder="Search for products, brands and more" />
          <CustomDiv>
            <Storefront
              sx={{
                color: "black",
                marginRight: "10px",
                alignContent: "center",
              }}
            />
            <CustomTypography variant="h6" color="black">
              Become a seller
            </CustomTypography>
          </CustomDiv>
          <CustomDiv>
            <PersonOutline
              sx={{
                color: "black",
                marginRight: "10px",
                alignContent: "center",
              }}
            />
            <CustomTypography variant="h6" color="black">
              Sign in
            </CustomTypography>
          </CustomDiv>
          <CustomDiv>
            <ShoppingCart
              sx={{
                color: "black",
                marginRight: "10px",
                alignContent: "center",
              }}
            />
            <CustomTypography variant="h6" color="black">
              Cart
            </CustomTypography>
          </CustomDiv>

          <CustomDiv>
            <MoreVert />
          </CustomDiv>
        </StyledToolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;

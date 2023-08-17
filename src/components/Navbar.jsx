import styled from "@emotion/styled";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import {
  MoreVert,
  PersonOutline,
  Search,
  ShoppingCart,
  Storefront,
} from "@mui/icons-material";
import Footer from "./Footer";
import MoreVertMenu from "./MoreVertMenu";
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

const SearchInput = styled("input")(({ theme }) => ({
  border: "none",
  display: "flex",
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
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
  return (
    <>
      <AppBar position="sticky" color="whiteColor">
        <Box
          sx={{
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <StyledToolbar>
            <Link to="/" style={{ textDecoration: "none" }}>
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
                  <span style={{ color: "#ffc200", marginRight: "5px" }}>
                    Plus
                  </span>
                  <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg" />
                </Typography>
              </HeadingDiv>
            </Link>
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
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Sign in
                </Link>
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

            <CustomDiv onClick={handleClick} ref={ref}>
              <MoreVert />
              {open && (
                <MoreVertMenu
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  open={open}
                />
              )}
            </CustomDiv>
          </StyledToolbar>
        </Box>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;

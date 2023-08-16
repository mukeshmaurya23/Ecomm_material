import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { theme } from "../theme";
import { Box, Divider } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import StarsIcon from "@mui/icons-material/Stars";
const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: theme.palette.background.footerColor.default }}>
        <Stack direction="row">
          <Stack spacing={2} px={5} py={5}>
            <Typography variant="footerHeading">About</Typography>
            <Typography variant="footerContent">Contact Us</Typography>
            <Typography variant="footerContent">About Us</Typography>
            <Typography variant="footerContent">Carrers</Typography>
            <Typography variant="footerContent">Flipkart Stories</Typography>
            <Typography variant="footerContent">Press</Typography>
            <Typography variant="footerContent">Flipkart WholeSale</Typography>
            <Typography variant="footerContent">
              Corporate Information
            </Typography>
          </Stack>
          <Stack spacing={2} px={10} py={5}>
            <Typography variant="footerHeading">Help</Typography>
            <Typography variant="footerContent">Payments</Typography>
            <Typography variant="footerContent">Shipping</Typography>
            <Typography variant="footerContent">
              Cancellation & Returns
            </Typography>
            <Typography variant="footerContent">FAQ</Typography>
            <Typography variant="footerContent">Report Infringement</Typography>
          </Stack>
          <Stack spacing={2} px={1} py={5}>
            <Typography variant="footerHeading">Consumer Policy</Typography>
            <Typography variant="footerContent">
              Cancellation & Returns
            </Typography>
            <Typography variant="footerContent">Terms Of Use</Typography>
            <Typography variant="footerContent">Security</Typography>
            <Typography variant="footerContent">Privacy</Typography>
            <Typography variant="footerContent">Sitemap</Typography>
            <Typography variant="footerContent">Grievance Redressal</Typography>
            <Typography variant="footerContent">EPR Compliance</Typography>
          </Stack>
          <Stack spacing={2} paddingX={5} paddingRight="100px" py={5}>
            <Typography variant="footerHeading">Social</Typography>
            <Typography variant="footerContent">Facebook</Typography>
            <Typography variant="footerContent">Twitter</Typography>
            <Typography variant="footerContent">YouTube</Typography>
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: "200px",
              width: "1px",
              marginTop: "40px",
              bgcolor: "gray",
            }}
          />
          <Stack spacing={2} px={2} py={5}>
            <Typography variant="footerHeading">Mail us</Typography>
            <Typography
              variant="footerContentAddress"
              sx={{
                width: "200px",
              }}
            >
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Typography>
          </Stack>
          <Stack spacing={2} px={2} py={5}>
            <Typography variant="footerHeading">
              Registered Office Address:
            </Typography>
            <Typography
              variant="footerContentAddress"
              sx={{
                width: "300px",
              }}
            >
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone:{" "}
              <span style={{ color: "#2874f0" }}>1800 202 9898</span>
            </Typography>
          </Stack>
        </Stack>
        <Divider orientation="horizontal" sx={{ bgcolor: "gray" }} />
        <Stack direction="row" justifyContent="space-between" px={5} py={5}>
          <Stack direction="row" spacing={2}>
            <WorkIcon
              sx={{
                color: "yellow",
                lineHeight: "0",
              }}
            />
            <Typography variant="footerDownContent">Become a Seller</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <StarsIcon
              sx={{
                color: "yellow",
                lineHeight: "0",
              }}
            />
            <Typography variant="footerDownContent">Advertise</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <CardGiftcardIcon
              sx={{
                color: "yellow",
                lineHeight: "0",
              }}
            />
            <Typography variant="footerDownContent">Gift Cards</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <HelpIcon
              sx={{
                color: "yellow",
                lineHeight: "0",
              }}
            />
            <Typography variant="footerDownContent">Help Center</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="footerDownContent">
              © 2007-2021 Flipkart.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;

import { createTheme } from "@mui/material";

export const theme = createTheme({
  //palette is for colors customization
  palette: {
    secondary: {
      main: "#3f51b5",
    },

    whiteColor: {
      main: "#ffffff",
    },

    blackColor: {
      main: "#212121",
    },
    background: {
      footerColor: {
        default: "#172337",
      },
      orangeColor: {
        default: "#fb641b",
      },
      navColor: {
        default: "#2874f0",
      },
    },
  },
  //typography is for font customization
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 400,
      color: "#212121",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
      color: "#212121",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#212121",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#212121",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "0.8rem",
      fontWeight: 400,
      color: "#212121",
    },
    footerHeading: {
      fontSize: "12px",
      fontWeight: 400,

      color: "#878787",

      textTransform: "uppercase",
      marginBottom: "10px",
    },
    footerContent: {
      fontSize: "12px",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: "1",
    },
    footerDownContent: {
      fontSize: "14px",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: "2",
    },
    footerContentAddress: {
      fontSize: "12px",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: "2",
    },
  },
});

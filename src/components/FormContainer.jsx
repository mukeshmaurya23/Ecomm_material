import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSignupSchema } from "../validation/LoginSignupValidation";
const FormContainer = ({
  textTitle,
  textDescription,
  buttonText,
  ExistingUserButton,
  createAccount,
  label,
}) => {
  const StyledButton = styled(Button)({
    marginTop: "20px",

    backgroundColor: theme.palette.background.orangeColor.default,
    "&:hover": {
      backgroundColor: theme.palette.background.orangeColor.default,
    },
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: loginSignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleContinue = () => {
    formik.setTouched({
      phone: true,
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          width: "840px",
          margin: "auto",
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper variant="outlined" sx={{ width: "100%" }}>
          <Stack direction="row" sx={{ height: "500px" }}>
            <Stack
              direction="column"
              sx={{
                backgroundColor: "#2874f0",
                padding: "40px 33px",

                width: "40%",
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",

                  fontSize: "1.3rem",
                }}
              >
                {textTitle}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#dbdbdb",
                  fontWeight: "500",
                  marginTop: "30px",
                  fontSize: "1rem",
                }}
              >
                {textDescription}
              </Typography>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  bottom: "10px",
                  padding: "10px",
                  borderRadius: "0",
                }}
              />
            </Stack>

            <Stack
              direction="column"
              sx={{
                height: "100%",
                padding: "30px",
                width: "60%",
                position: "relative",
              }}
            >
              <TextField
                id="standard-basic"
                label={label}
                variant="standard"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                InputLabelProps={{
                  style: { fontSize: "0.9rem" },
                }}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Typography
                  sx={{
                    color: "red",
                    fontSize: ".7rem",
                    fontWeight: "500",
                    marginTop: "4px",
                  }}
                >
                  {formik.errors.phone}
                </Typography>
              ) : null}
              <Typography sx={{ marginTop: "50px", fontSize: ".8rem" }}>
                By continuing, you agree to Flipkart's{" "}
                <span
                  style={{
                    color: "#2874f0",
                  }}
                >
                  Terms of Use
                </span>{" "}
                and{" "}
                <span
                  style={{
                    color: "#2874f0",
                  }}
                >
                  Privacy{" "}
                </span>
                Policy.
              </Typography>
              <StyledButton
                variant="contained"
                onClick={handleContinue}
                type="submit"
              >
                {buttonText}
              </StyledButton>
              {ExistingUserButton && (
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "16px",
                    backgroundColor: "#fff",

                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#2874f0" }}
                  >
                    Existing User? Log in
                  </Link>
                </Button>
              )}

              {createAccount && (
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "30px",
                    fontSize: ".9rem",
                    cursor: "pointer",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  New to Flipkart?{" "}
                  <Link to="/signup" style={{ color: "#2874f0" }}>
                    Create an account
                  </Link>
                </Typography>
              )}
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </form>
  );
};

export default FormContainer;

import React from "react";
import FormContainer from "./FormContainer";

const Login = () => {
  return (
    <FormContainer
      textTitle={"Login"}
      textDescription={
        "  Get access to your Orders, Wishlist and Recommendations"
      }
      buttonText={"Request for Otp"}
      createAccount={true}
      label={"Enter Email/Mobile number"}
    />
  );
};

export default Login;

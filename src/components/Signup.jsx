import React from "react";
import FormContainer from "./FormContainer";

const Signup = () => {
  return (
    <FormContainer
      textTitle={"Looks like you're new here!"}
      textDescription={"Sign up with your mobile number to get started"}
      buttonText={"Continue"}
      ExistingUserButton={true}
      label={"Enter Mobile number"}
    />
  );
};

export default Signup;

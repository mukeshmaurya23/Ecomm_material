import * as Yup from "yup";

export const loginSignupSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Please Enter Valid Mobile Number")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});

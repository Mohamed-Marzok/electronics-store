import * as yup from "yup";

// Common validation schema
const commonValidation = {
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email must be valid"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters long and contain at least one letter and one number"
    ),
};

// Login validation schema
export const loginValidation = yup
  .object({
    ...commonValidation,
  })
  .required();

// Signup validation schema
export const signupValidation = yup
  .object({
    ...commonValidation,
    name: yup.string().required("Name is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    image: yup.mixed(),
  })
  .required();

export const addProductValidation = yup
  .object({
    title: yup.string().required("Title is required"),

    body: yup
      .string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),

    phone: yup
      .string()
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{11}$/,
        "Phone number is not valid. It must be a valid 10-digit number."
      )
      .required("Phone number is required"),

    price: yup
      .number()
      .typeError("Price must be a number")
      .positive("Price must be a positive number")
      .test(
        "is-decimal",
        "Price must be a valid number with up to two decimal places",
        (value) => (value ? /^\d+(\.\d{1,2})?$/.test(value.toString()) : true)
      )
      .required("Price is required"),
  })
  .required();

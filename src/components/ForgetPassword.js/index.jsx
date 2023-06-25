import {
  Box,
  Button,
  CardContent,
  FormControl,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useForgetPassword } from "src/features/user/forgetPassword";
import Logo from "src/utils/Logo";
import Spinner from "src/utils/Spinner";
import { toast } from "react-toastify";
import { onError } from "src/utils/func";

const ForgetPassword = ({ handleClose }) => {
  const theme = useTheme();
  const { mutate: forgetSellerPassword, isLoading } = useForgetPassword();
  const initialState = {
    email: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required.")
        .email("Must be a valid email.")
        .max(30, "Email character must not be greater than thirty.")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces."
        ),
    }),
    onSubmit: async (values) => {
      forgetSellerPassword(values, {
        onSuccess: (result) => {
          toast.success(result?.message);
        },
        onError,
      });
    },
  });

  return (
    <Box sx={{ display: "flex", flex: "1", flexDirection: "column" }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            pb: 0.5,
            mb: 2,
            height: 32,
            width: 32,
          }}
        >
          <Logo />
        </Box>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold" }}
          textAlign="center"
          mt={1}
          component="div"
          variant="h2"
          gutterBottom
        >
          Welcome to Keyword Alpha
        </Typography>
        <Typography
          textAlign="center"
          variant="subtitle1"
          color="text.secondary"
          component="div"
          gutterBottom
          sx={{ px: { xs: 1, md: 2, lg: 5 } }}
        >
          Please enter the email address associated with your account. We will
          email you a link to reset your password
        </Typography>
        <Box textAlign="center" mt={5}>
          <CustomFormControl>
            <TextField
              error={!!(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              id="email"
              type="email"
              label="Email Address"
              name="email"
              variant="standard"
              aria-describedby="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </CustomFormControl>
        </Box>

        <Typography textAlign="center" mt={5}>
          <Button
            disabled={isLoading}
            onClick={formik.handleSubmit}
            sx={{ width: "50%" }}
            size="medium"
            variant="contained"
          >
            {isLoading ? (
              <>
                Loading
                <Spinner size={"1rem"} />
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </Typography>

        <Typography
          textAlign="center"
          variant="subtitle1"
          color="text.secondary"
          component="div"
          mt={3}
        >
          Back to{" "}
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            onClick={handleClose}
          >
            Login
          </Link>
        </Typography>
      </CardContent>
    </Box>
  );
};

export default ForgetPassword;

const CustomFormControl = styled(FormControl)(
  ({ theme }) => `
      width: 50%;
      @media (max-width: 900px) {
          width: 100%;
      } 
      `
);

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { VisibilityIcon, VisibilityOffIcon } from "src/utils/icons";
import { Link } from "react-router-dom";
import { useRegisterUser } from "src/features/user/registerUser";
import { onError } from "src/utils/func";
import { toast } from "react-toastify";
import Logo from "src/utils/Logo";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = (props) => {
  const { handleClose } = props;
  const { mutate: registerUser, isLoading } = useRegisterUser();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: sellerRegistrationValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      registerUser(values, {
        onSuccess: (result) => {
          toast.success(result?.message);
          handleClose();
          resetForm();
        },
        onError,
      });
    },
  });

  return (
    <>
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
        textAlign="center"
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Welcome to Keyword Alpha
      </Typography>

      <Typography
        textAlign="center"
        variant="subtitle1"
        color="text.secondary"
        component="div"
      >
        Already registered?{" "}
        <Link
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
          onClick={handleClose}
        >
          Sign In Now
        </Link>
      </Typography>
      <Grid container mt={0} spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12}>
          <TextField
            error={!!(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            variant="standard"
            label="Email"
            name="email"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                formik.handleSubmit();
              }
            }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.email}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            error={!!(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="New Password"
            name="password"
            variant="standard"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword.password ? "text" : "password"}
            value={formik.values.password}
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      password: !showPassword.password,
                    })
                  }
                >
                  {showPassword.password ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            error={
              !!(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )
            }
            fullWidth
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            label="Confirm Password"
            name="confirmPassword"
            variant="standard"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                formik.handleSubmit();
              }
            }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword.confirmPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      confirmPassword: !showPassword.confirmPassword,
                    })
                  }
                >
                  {showPassword.confirmPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <Button
          disabled={isLoading}
          variant="contained"
          onClick={formik.handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default Register;

Register.propTypes = {
  handleClose: PropTypes.func,
};

const sellerRegistrationValidationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(30)
    .required("Email is required"),
  password: Yup.string()
    .max(30)
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords Must match."
  ),
});

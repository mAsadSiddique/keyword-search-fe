import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import Spinner from "src/utils/Spinner";
import { VisibilityIcon, VisibilityOffIcon } from "src/utils/icons";
import * as Yup from "yup";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(30)
        .required("Email is required"),
      password: Yup.string().max(30).required("Password is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setIsLoading(false);
    },
  });

  // console.log("values: ", formik.values);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 700, px: 3, py: "100px", width: "100%" }}>
          <div>
            <Stack spacing={3} mb={3}>
              <Typography textAlign={"center"} variant="h4">
                Login to your keyword alpha account
              </Typography>
            </Stack>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  variant="filled"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  variant="filled"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      formik.handleSubmit();
                    }
                  }}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    ),
                  }}
                />
              </Stack>
            </form>
            <Button
              disabled={isLoading ? true : false}
              fullWidth
              onClick={formik.handleSubmit}
              size="large"
              sx={{ mt: 3 }}
              type="submit"
              variant="contained"
            >
              {isLoading ? (
                <>
                  Login
                  <Spinner size={"1rem"} />
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;

import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FORM_TO_OPEN_ENUM } from "src/constants/enums";
import usePopover from "src/hooks/usePopover";
import { getUserActivity } from "src/store/UserActivitySlice";
import FormsModal from "src/utils/Modal";
import Spinner from "src/utils/Spinner";
import { VisibilityIcon, VisibilityOffIcon } from "src/utils/icons";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const openModal = usePopover();
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

  const handleCreateAccount = () => {
    openModal.handleOpen();
    dispatch(getUserActivity(FORM_TO_OPEN_ENUM.SIGN_UP));
  };

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
        <Box
          sx={{
            maxWidth: 700,
            px: 3,
            py: { xs: "10px", sm: "15px", md: "55px", lg: "80px" },
            width: "100%",
          }}
        >
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
              <Link to={"/forget-password"} style={{ textDecoration: "none" }}>
                <FormHelperText sx={{ textAlign: "right", mt: 1 }}>
                  Forget Password ?
                </FormHelperText>
              </Link>
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
            <Typography textAlign="center" mt={5} variant="h5" fontWeight={700}>
              Do Not Have A Keyword Tool Account?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <Button
                sx={{ maxWidth: 377 }}
                variant="contained"
                onClick={handleCreateAccount}
              >
                Create Account
              </Button>
              <FormsModal
                open={openModal.open}
                handleClose={openModal.handleClose}
              />

              <Button sx={{ mt: 5, maxWidth: 575 }} variant="contained">
                Subscribe a keyword alpha tool pro
              </Button>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;

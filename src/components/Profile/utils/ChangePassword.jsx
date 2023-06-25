import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useChangeUserPassword } from "src/features/user/changePassword";
import Spinner from "src/utils/Spinner";
import { onError } from "src/utils/func";
import { VisibilityIcon, VisibilityOffIcon } from "src/utils/icons";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    password: false,
    confirmPassword: false,
  });
  const { mutate: changeSellerPassword, isLoading: sellerLoading } =
    useChangeUserPassword();

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().max(30).required("Password is required"),
      password: Yup.string()
        .max(30)
        .required("New Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords Must match."
      ),
    }),
    onSubmit: async (values) => {
      changeSellerPassword(values, {
        onSuccess: (data) => {
          toast.success(data.message);
          navigate("/");
        },
        onError,
      });
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ flex: "1 1 auto", maxWidth: "700px", mt: 1 }}>
        <CardContent>
          <Typography sx={{ textAlign: "center" }} variant="h5">
            Change Password
          </Typography>
          <Stack spacing={3} py={2}>
            <FormControl>
              <TextField
                error={
                  !!(formik.touched.oldPassword && formik.errors.oldPassword)
                }
                fullWidth
                helperText={
                  formik.touched.oldPassword && formik.errors.oldPassword
                }
                label="Old Password"
                name="oldPassword"
                variant="filled"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type={showPassword.oldPassword ? "text" : "password"}
                value={formik.values.oldPassword}
                autoComplete="new-password"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          oldPassword: !showPassword.oldPassword,
                        })
                      }
                    >
                      {showPassword.oldPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                error={!!(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="New Password"
                name="password"
                variant="filled"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type={showPassword.password ? "text" : "password"}
                value={formik.values.password}
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
            </FormControl>
            <FormControl>
              <TextField
                error={
                  !!(
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  )
                }
                fullWidth
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                label="Confirm Password"
                name="confirmPassword"
                variant="filled"
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
            </FormControl>{" "}
          </Stack>
          <Stack sx={{ display: "flex", alignItems: "center" }}>
            <Button
              disabled={sellerLoading}
              onClick={formik.handleSubmit}
              variant="contained"
            >
              {sellerLoading ? (
                <>
                  Loading
                  <Spinner size={"1rem"} />
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ChangePassword;

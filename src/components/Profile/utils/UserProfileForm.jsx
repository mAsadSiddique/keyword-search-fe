import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Tooltip,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Spinner from "src/utils/Spinner";
// import { toast } from "react-toastify";
import * as Yup from "yup";
import { useEditProfile } from "../API/editProfile";
import { toast } from "react-toastify";
import { onError } from "src/utils/func";

const UserProfileForm = ({ profile }) => {
  const { mutate: editUserProfile, isLoading } = useEditProfile();
  let isEmptyProfile = Object.keys(profile)?.length;
  //   const [phoneNumber, setPhoneNumber] = useState({
  //     phone: "",
  //     isValidPhoneNumber: false,
  //   });

  const formik = useFormik({
    initialValues: {
      firstName: !isEmptyProfile ? "" : profile?.firstName,
      lastName: !isEmptyProfile ? "" : profile?.lastName,
      email: !isEmptyProfile ? "" : profile?.email,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required.")
        .min(3, "First Name must be at least 3 characters")
        .max(30, "First Name must be at most 20 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
      lastName: Yup.string()
        .required("Last Name is required.")
        .min(3, "Last Name must be at least 3 characters")
        .max(30, "Last Name must be at most 20 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
      email: Yup.string()
        .email("Must be a valid email")
        .max(30)
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      editUserProfile(values, {
        onSuccess: (data) => {
          toast.success(data?.message);
        },
        onError,
      });
      //   console.log("values: ", Object.keys(values));
    },
  });

  //   const handleBur = (ev) => {
  //     let phoneNumber = ev.target.value;
  //     if (!phoneNumber) {
  //       setPhoneNumber((prevState) => {
  //         return {
  //           ...prevState,
  //           phone: phoneNumber,
  //           isValidPhoneNumber: true,
  //         };
  //       });
  //     }
  //   };

  //   const handlePhoneNumber = (phoneNumber) => {
  //     setPhoneNumber((prevState) => {
  //       return {
  //         ...prevState,
  //         phone: phoneNumber,
  //         isValidPhoneNumber: true,
  //       };
  //     });
  //     if (matchIsValidTel(phoneNumber)) {
  //       console.log("here");
  //       setPhoneNumber((prevState) => {
  //         return {
  //           ...prevState,
  //           phone: phoneNumber,
  //           isValidPhoneNumber: false,
  //         };
  //       });
  //     }
  //     // console.log("phoneNumber: ", phoneNumber);
  //   };
  //   console.log("formik: ", formik.dirty);
  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  error={
                    !!(formik.touched.firstName && formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  fullWidth
                  variant="filled"
                  label="First Name"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  error={!!(formik.touched.lastName && formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  fullWidth
                  variant="filled"
                  label="Last Name"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Tooltip title="Email is not editable" placement="top">
                  <TextField
                    inputProps={{ readOnly: true }}
                    error={!!(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    variant="filled"
                    label="Email"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    value={formik.values.email}
                  />
                </Tooltip>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MuiTelInput
                  error={
                    !!(
                      phoneNumber.isValidPhoneNumber &&
                      phoneNumber.isValidPhoneNumber
                    )
                  }
                  helperText={
                    phoneNumber.isValidPhoneNumber &&
                    "Phone Number must be a valid phone Number."
                  }
                  forceCallingCode
                  onlyCountries={["PK"]}
                  defaultCountry="PK"
                  fullWidth
                  variant="filled"
                  label="Phone Number"
                  name="phoneNumber"
                  onBlur={handleBur}
                  onChange={handlePhoneNumber}
                  required
                  value={phoneNumber?.phone}
                />
              </Grid> */}
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            disabled={isLoading}
            variant="contained"
            onClick={formik.handleSubmit}
          >
            {isLoading ? (
              <>
                Loading
                <Spinner size={"1rem"} />
              </>
            ) : (
              "Save Details"
            )}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default UserProfileForm;

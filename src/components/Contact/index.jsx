import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { getShotName } from "src/utils/func";
import HelperText from "src/utils/HelperText";

const Contact = () => {
  const [bookPic, setBookPic] = useState({
    bookDocument: "",
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      subject: "",
      messages: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("User name is required.")
        .min(2, "User name must be at least 2 characters")
        .max(20, "User name must be at most 20 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
      email: Yup.string()
        .required("Email is required")
        .email("Must be a valid email")
        .max(30, "Email must be at most 20 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
      subject: Yup.string()
        .required("Last Name is required.")
        .min(2, "Last Name must be at least 2 characters")
        .max(20, "Last Name must be at most 20 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
      messages: Yup.string()
        .required("Message is required.")
        .min(20, "Message must be at least 20 characters")
        .max(300, "Message must be at most 300 characters")
        .matches(
          /[^\s*].*[^\s*]/g,
          "* This field cannot contain only blankspaces"
        ),
    }),
    onSubmit: () => {},
  });
  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            Contact Keyword Tool Team To Get Fast Customer Support
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", mt: 2 }}>
            Please Leave A Message Using The Form Below And We Will Get Back To
            You As Soon As Possible
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                error={!!(formik.touched.userName && formik.errors.userName)}
                helperText={formik.touched.userName && formik.errors.userName}
                label="First Name"
                name="userName"
                sx={{ width: "100%", margin: "10px" }}
                value={formik.values.userName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="First Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                type="email"
                name="email"
                sx={{ width: "100%", margin: "10px" }}
                placeholder="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={!!(formik.touched.subject && formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
                label="Subject"
                type="subject"
                name="subject"
                sx={{ width: "100%", margin: "10px" }}
                placeholder="subject"
                value={formik.values.subject}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={6}
                required
                error={!!(formik.touched.messages && formik.errors.messages)}
                helperText={formik.touched.messages && formik.errors.messages}
                label="Messages"
                type="text"
                name="messages"
                sx={{ width: "100%", margin: "10px" }}
                placeholder="Email"
                value={formik.values.messages}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  //   flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button variant="outlined" component="label">
                  Attachments
                  <input
                    accept="application/pdf"
                    onChange={(ev) => {
                      formik.setFieldValue(
                        "bookDocument",
                        ev.currentTarget.files[0]
                      );
                      setBookPic({
                        ...bookPic,
                        bookDocument: ev.currentTarget.files[0],
                      });
                    }}
                    name="bookDocument"
                    type="file"
                    hidden
                  />
                </Button>

                <Typography
                  sx={{
                    height: 55,
                    minWidth: "20px",
                    maxWidth: "100px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                  variant="body2"
                >
                  {bookPic.bookDocument
                    ? getShotName(bookPic?.bookDocument?.name)
                    : "-----"}
                </Typography>

                <HelperText
                  error={
                    formik.touched.bookDocument && formik.errors.bookDocument
                  }
                />
              </Box>
            </Grid>
          </Grid>
          <Button
            onClick={formik.handleSubmit}
            sx={{ mt: 2 }}
            variant="contained"
          >
            contact us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

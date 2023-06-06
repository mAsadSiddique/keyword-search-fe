import { Box, Grid } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

import { CircularProgress } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NavBar = lazy(() => import("src/components/NavBar"));
const Main = lazy(() => import("src/components/Main"));
const Login = lazy(() => import("src/components/Login"));

const RouterProvide = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense
        fallback={
          <CircularProgress
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="primary"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvide;

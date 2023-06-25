import { CircularProgress } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "src/components/Profile";

const NavBar = lazy(() => import("src/components/NavBar"));
const KeywordBasket = lazy(() => import("src/components/KeywordBasket"));
const Contact = lazy(() => import("src/components/Contact"));
const Main = lazy(() => import("src/components/Main"));
const Login = lazy(() => import("src/components/Login"));
const SetPassword = lazy(() => import("src/components/SetPassword"));

const RouterProvide = () => {
  return (
    <BrowserRouter>
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
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/keyword-basket" element={<KeywordBasket />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvide;

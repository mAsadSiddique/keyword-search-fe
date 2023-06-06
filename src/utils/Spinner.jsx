import { CircularProgress } from "@mui/material";
import React from "react";

const Spinner = ({ size }) => {
  return <CircularProgress sx={{ ml: 2 }} size={size} />;
};

export default Spinner;

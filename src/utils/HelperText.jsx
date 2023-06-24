import { FormHelperText, useTheme } from "@mui/material";
import React from "react";

const HelperText = ({ error }) => {
  const theme = useTheme();
  return (
    <FormHelperText sx={{ color: theme.palette.error.main }}>
      {error}
    </FormHelperText>
  );
};

export default HelperText;

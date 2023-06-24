import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const IconsButton = ({ icons, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton>{icons}</IconButton>
    </Tooltip>
  );
};

export default IconsButton;

import {
  Dialog,
  DialogContent,
} from "@mui/material";
import React from "react";

const ViewImage = ({ onClose, open, adminProfileAvatar }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogContent sx={{ width: 400 }}>
        <img
          style={{ objectFit: "contain" }}
          width={350}
          src={adminProfileAvatar}
          alt="asda"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ViewImage;

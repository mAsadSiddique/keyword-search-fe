import { Box, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { userActivitySelector } from "src/store/UserActivitySlice";
import { FORM_TO_OPEN_ENUM } from "src/constants/enums";
import Register from "src/components/Register";

const modalStyle = {
  position: "absolute",
  top: { xs: "50%", md: "30%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, sm: 500, md: 600 },
//   height: { xs: "100%", sm: "auto" },
  overflow: "auto",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "16px",
  boxShadow: 24,
  p: { xs: 2, md: 4 },
};

const FormsModal = (props) => {
  const { open, handleClose } = props;
  const selectedForm = useSelector(userActivitySelector)?.SelectedActivity;
  let content = "";
  if (selectedForm === FORM_TO_OPEN_ENUM.SIGN_UP) {
    content = <Register handleClose={handleClose} />;
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <Box sx={modalStyle}>{content}</Box>
    </Modal>
  );
};

export default FormsModal;

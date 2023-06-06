import React from "react";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const navigate = useNavigate();

  const handleSignOut = async () => {
    onClose();
    navigate("/");
  };
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box sx={{ py: 1.5, px: 2 }}>
        <Typography variant="overline">Jhony</Typography>
        <Typography color="text.secondary" variant="body2">
          Simple Account
        </Typography>
        <Divider />
        <Stack>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="overline" color="text.primary">
              Profile
            </Typography>
          </Link>
        </Stack>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{ p: "8 px", "& > *": { borderRadius: 1 } }}
      >
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Popover>
  );
};

export default AccountPopover;

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

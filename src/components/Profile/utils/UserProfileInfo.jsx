import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ViewImage from "./ViewImage";
import Spinner from "src/utils/Spinner";

const UserProfileInfo = ({ profile }) => {
  const [isLoading, setIsLoading] = useState(false);
  let isEmptyProfile = Object.keys(profile)?.length;
  const [open, setOpen] = React.useState(false);
  const [adminProfileAvatar, setAdminProfileAvatar] = useState({
    avatar: "",
    profileToBeUpdate: "",
  });

  console.log("setIsLoading: ", setIsLoading);

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    if (!!isEmptyProfile) {
      setAdminProfileAvatar((prevState) => {
        return {
          ...prevState,
          avatar: profile?.imageUrl,
        };
      });
    }
  }, [isEmptyProfile, profile?.imageUrl]);

  const handleProfilePic = (pic) => {};

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ height: 80, width: 80, mb: 2, outline: "GrayText solid 1px" }}
          >
            <Avatar
              sx={{
                height: 70,
                width: 70,
              }}
              src={adminProfileAvatar?.avatar}
            />
          </IconButton>
          <ViewImage
            open={open}
            onClose={handleClose}
            adminProfileAvatar={adminProfileAvatar?.avatar}
          />
          <Typography gutterBottom variant="h5">
            {!!isEmptyProfile && profile?.firstName + " " + profile?.lastName}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {!!isEmptyProfile && profile?.role} User
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          disabled={isLoading}
          onChange={(ev) => handleProfilePic(ev.target.files[0])}
          fullWidth
          variant="text"
          component="label"
        >
          {isLoading ? (
            <>
              Loading
              <Spinner size={"1rem"} />
            </>
          ) : (
            "Upload"
          )}
          <input hidden accept="jpg, png" type="file" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserProfileInfo;

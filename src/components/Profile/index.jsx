import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import UserProfileInfo from "./utils/UserProfileInfo";
import UserProfileForm from "./utils/UserProfileForm";
import { useUserProfile } from "./API/userProfile";
import ChangePassword from "./utils/ChangePassword";

const Profile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const { data } = useUserProfile();
  // const isProfileUpdate = useSelector(acceptInReviewSliceSelector)

  useEffect(() => {
    if (data?.data) {
      setUserProfile(data?.data);
    }
  }, [data]);

  console.log("setAdminProfile: ", userProfile);
  return (
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <div>
          <Typography mt={2} variant="h4">
            Profile
          </Typography>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <UserProfileForm profile={userProfile} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <ChangePassword profile={userProfile} />
              {/* <UserProfileInfo profile={userProfile} /> */}
            </Grid>

            {/* <Grid item xs={12} md={6} lg={4}></Grid>

            <Grid item xs={12} md={12} lg={8}>
              
            </Grid> */}
          </Grid>
        </div>
      </Stack>
    </Container>
  );
};

export default Profile;

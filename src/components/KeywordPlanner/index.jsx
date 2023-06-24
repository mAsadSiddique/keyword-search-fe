import { Box, Typography } from "@mui/material";
import React from "react";

const KeywordPlanner = ({ heading, content }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: {
            xs: "column-reverse",
            md: "column",
            lg: "row-reverse",
          },
          alignItems: "center",
          gap: 10,
          mt: { xs: 5, md: 15 },
        }}
      >
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" sx={{ fontWeight: 10 }}>
            {heading}
          </Typography>
          <Typography sx={{ my: { xs: 2 } }}>{content}</Typography>
        </Box>
        <Box component="div" sx={{ width: 300 }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="./assets/banner.jpg"
            alt="banner"
          />
        </Box>
      </Box>
      <Box sx={{ my: 5, alignItems: "center", width: "100%" }}>
        <img width={"100%"} src="./assets/google-ads.svg" alt="stats-banner" />
      </Box>
    </>
  );
};

export default KeywordPlanner;

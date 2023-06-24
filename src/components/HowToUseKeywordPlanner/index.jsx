import React from "react";
import { Box, Typography } from "@mui/material";

const HowToUseKeywordPlanner = ({ heading, content }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: {
            xs: "column-reverse",
            md: "column",
            lg: "row",
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
            src="./assets/how-to-use.svg"
            alt="banner"
          />
        </Box>
      </Box>
      <Box sx={{ my: 5, alignItems: "center", width: "100%" }}>
        <img
          width={"100%"}
          src="./assets/seo-stats-banner.svg"
          alt="stats-banner"
        />
      </Box>
    </>
  );
};

export default HowToUseKeywordPlanner;

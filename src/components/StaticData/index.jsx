import { Box, Typography } from "@mui/material";
import React from "react";

const StaticData = () => {
  return (
    <Box sx={{ py: 3, m: 1, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: 10 }} gutterBottom>
        Discover Top Keywords Your Competitors Are Ranking For!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ever wondered where your competitors are getting their traffic from?
        With Keyword Tool Pro's competitor analysis tool, you won't have to
        worry about it anymore. Just enter your competitor's website URL in the
        tool and Keyword Tool Pro will return ALL the keywords they are ranking
        for, including their search volume, trends, and how competitive the
        keywords are.
      </Typography>
      <Typography variant="subtitle1">
        All the data is 100% accurate and up to date, so you can start targeting
        those keywords and give your website a powerful boost to attract even
        more leads! You'll never miss out on any opportunity with us. This
        valuable feature is only available to our Keyword Tool Pro subscribers,
        so subscribe now to have access to these hidden gems immediately!
      </Typography>
      <Box sx={{ my: 5, alignItems: "center", width: "100%" }}>
        <img width={"100%"} src="./assets/Data.svg" alt="stats-banner" />
      </Box>
    </Box>
  );
};

export default StaticData;

import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import KeywordNavbar from "../KeywordNavbar";
import KeywordPlanner from "../KeywordPlanner";
import HowToUseKeywordPlanner from "../HowToUseKeywordPlanner";
import StaticData from "../StaticData";

const Main = () => {
  return (
    <Box component="div">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            my: { xs: 5, md: 18 },
            textAlign: "center",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: { xs: "bold", md: 10 },
            mb: 4,
          }}
        >
          Find Great Keywords Using Apple App Store Autocomplete
        </Typography>
        <KeywordNavbar />
        <KeywordPlanner
          heading={"How to use google keyword planner?"}
          content={`While Google will not directly charge you for using Keyword Planner,
            you will not be able to use Google Keyword Planner for free. The
            costs are indirect - to use the Google tool you have to spend money
            on Google Ads. Before you can access Google Keyword Planner you need
            to complete the following steps: Create a Google Ads account Connect
            billing method to Google Ads (usually your credit card) Start a
            Google Ads campaign Keep the campaign running and make sure it
            spends money.`}
        />
        <HowToUseKeywordPlanner
          heading={`How to Use Google Keyword Planner?`}
          content={`While Google will not directly charge you for using Keyword
          Planner, you will not be able to use Google Keyword Planner
          for free. The costs are indirect - to use the Google tool you
          have to spend money on Google Ads.
          
          Before you can access Google Keyword Planner you
          need to complete the following steps:
          Create a Google Ads account
          Connect billing method to Google Ads
           (usually your credit card)
          Start a Google Ads campaign
          Keep the campaign running and make sure
           it spends money
          `}
        />
        <StaticData />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          <Typography textAlign="center" variant="h4">
            Start Using Keyword Tool Now
          </Typography>
          <Button size="large" sx={{ my: 3 }} variant="contained">
            Find keyword
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;

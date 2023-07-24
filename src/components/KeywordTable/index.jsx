import { Box, Container } from "@mui/material";
import React from "react";
import KeywordTableListing from "./utils/KeywordTableListing";
import KeywordNavbar from "../KeywordNavbar";
import { useSelector } from "react-redux";
import { keywordPlannerSelector } from "src/store/KeywordPlannerSlice";

const KeywordTable = () => {
  const keywords = useSelector(keywordPlannerSelector)?.keywordPlannerArray;
  const isLoading = useSelector(keywordPlannerSelector)?.isKeywordsLoading;

  console.log("keywords: ", isLoading);

  return (
    <Box>
      <Container>
        <KeywordNavbar />
        <KeywordTableListing
          isLoading={isLoading}
          totalKeywords={keywords?.total_keywords}
          items={Object.values(keywords?.results)?.map((item) => item)}
        />
      </Container>
    </Box>
  );
};

export default KeywordTable;

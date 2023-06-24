import { useTheme } from "@emotion/react";
import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KeywordNavbar from "../KeywordNavbar";

const KeywordBasket = () => {
  const theme = useTheme();
  console.log("Theme: ", theme);
  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <KeywordNavbar />
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            minHeight: 320,
            backgroundColor: theme.palette.grey[200],
            p: 5,
            my: 5,
            gap: 10,
          }}
        >
          <Box
            maxWidth="sm"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">You keyword basket is empty</Typography>
            <Typography variant="subtitle1" mt={3}>
              <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
                {" "}
                Start searching for keywords
              </Link>{" "}
              and add them into your Keyword Basket from the search results
              page.
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              You can add up to 1,000 keywords.
            </Typography>
          </Box>
          <Box maxWidth="sm">
            <img
              style={{ width: 170, height: 178 }}
              src={"https://keywordtool.io/images/svg/undraw_void_3ggu.svg"}
              alt="keyword-basket"
            />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default KeywordBasket;

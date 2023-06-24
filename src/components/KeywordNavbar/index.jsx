import { Google, YouTube } from "@mui/icons-material";
import { Box, Card, Divider } from "@mui/material";
import React from "react";
import IconsButton from "./utils/IconsButton";

const KeywordNavbar = () => {
  return (
    <Box>
      <Card sx={{ display: "flex", p: 1, alignItems: "center" }}>
        <IconsButton icons={<Google fontSize="large" />} tooltip={"Google"} />

        <IconsButton icons={<YouTube fontSize="large" />} tooltip={"Youtube"} />

        {/* <IconsButton icons={<being fontSize="large" />} /> */}
      </Card>
    </Box>
  );
};

export default KeywordNavbar;

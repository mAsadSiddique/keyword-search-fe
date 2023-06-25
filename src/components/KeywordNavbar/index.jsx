import { Box, Card } from "@mui/material";
import React from "react";
import IconsButton from "./utils/IconsButton";
import { FcGoogle } from "react-icons/fc";
import { BsYoutube } from "react-icons/bs";
import { FaSafari } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";

const KeywordNavbar = () => {
  return (
    <Box>
      <Card sx={{ display: "flex", p: 1, alignItems: "center", gap: 3 }}>
        <IconsButton icons={<FcGoogle fontSize={35} />} />

        <IconsButton icons={<BsYoutube fontSize={35} />} tooltip={"Youtube"} />
        <IconsButton icons={<FaSafari fontSize={35} />} tooltip={"Youtube"} />
        <IconsButton
          icons={<BiLogoPlayStore fontSize={35} />}
          tooltip={"Youtube"}
        />
        <IconsButton
          icons={<BsInstagram fontSize={35} />}
          tooltip={"Youtube"}
        />

        <IconsButton icons={<BsTwitter fontSize={35} />} tooltip={"Youtube"} />
        <IconsButton
          icons={<BsPinterest fontSize={35} />}
          tooltip={"Youtube"}
        />
      </Card>
    </Box>
  );
};

export default KeywordNavbar;

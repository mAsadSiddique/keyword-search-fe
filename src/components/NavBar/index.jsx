import React, { useState } from "react";
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Hidden,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import usePopover from "src/hooks/usePopover";
import {
  AccountCircleIcon,
  EmailIcon,
  ShoppingCartIcon,
} from "src/utils/icons";
import Logo from "src/utils/Logo";
import SelectionBar from "./utils/SelectionBar";
import { FIND_KEYWORD_ENUM } from "src/constants/enums";
import AccountPopover from "../AccountDetails";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authUserSelector } from "src/store/AuthUser";

const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 74;

const NavBar = (props) => {
  const { onNavOpen } = props;
  const location = useLocation();
  const hide = location.pathname === "/set-password";
  const user = useSelector(authUserSelector)?.user;
  const theme = useTheme();
  const navigate = useNavigate();

  const accountPopover = usePopover();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [labelSelection, setLabelSelection] = useState({
    findKeywords: FIND_KEYWORD_ENUM.GOOGLE,
    checkSeachVolume: FIND_KEYWORD_ENUM.AMAZON,
    keyWordToolPro: FIND_KEYWORD_ENUM.BEING,
  });

  const handleSelection = (ev) => {
    setLabelSelection(ev.target.value);
  };

  const handleLogin = (ev) => {
    navigate("/login");
  };

  return (
    <>
      {!hide ? (
        <>
          {" "}
          <Box
            component={"header"}
            sx={{
              backdropFilter: "blur(6px)",
              backgroundColor: (theme) =>
                alpha(theme.palette.background.default, 0.8),
              position: "sticky",
              left: { lg: `${SIDE_NAV_WIDTH}px` },
              top: 0,
              width: {
                lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
              },
              zIndex: (theme) => theme.zIndex.appBar,
              borderBottom: `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              spacing={2}
              sx={{
                minHeight: TOP_NAV_HEIGHT,
                px: { xs: 2, sm: 5, md: 10, lg: 20 },
              }}
            >
              {lgUp && (
                <Link to="/">
                  <Box
                    sx={{
                      display: "inline-flex",
                      height: 32,
                      width: 32,
                    }}
                  >
                    <Logo />
                  </Box>
                </Link>
              )}

              <Stack alignItems={"center"} direction="row" spacing={2}>
                {!lgUp && (
                  <IconButton onClick={onNavOpen}>
                    <WidgetsIcon fontSize="medium" />
                  </IconButton>
                )}

                {lgUp && (
                  <Stack direction={"row"} spacing={2}>
                    <SelectionBar
                      label={"Find keywords"}
                      FilterSelection={FIND_KEYWORD_ENUM}
                      handleSelection={handleSelection}
                      status={labelSelection?.findKeywords}
                    />
                    <SelectionBar
                      label={"Find keywords"}
                      FilterSelection={FIND_KEYWORD_ENUM}
                      handleSelection={handleSelection}
                      status={labelSelection.checkSeachVolume}
                    />
                    <SelectionBar
                      label={"Find keywords"}
                      FilterSelection={FIND_KEYWORD_ENUM}
                      handleSelection={handleSelection}
                      status={labelSelection.keyWordToolPro}
                    />
                  </Stack>
                )}
              </Stack>

              <Stack alignItems="center" direction="row" spacing={2}>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/contact"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <IconButton>
                      <Badge badgeContent={4} color="success" variant="dot">
                        <EmailIcon fontSize="medium" />
                      </Badge>
                    </IconButton>
                    <Hidden smDown>
                      <Typography variant="subtitle1">Contact</Typography>
                    </Hidden>
                  </Link>
                </Box>

                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to="/keyword-basket"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <IconButton>
                      <ShoppingCartIcon />
                    </IconButton>

                    <Hidden smDown>
                      <Typography variant="subtitle1">Keywords (0)</Typography>
                    </Hidden>
                  </Link>
                </Box>
                {!user?.token ? (
                  <Button
                    startIcon={<AccountCircleIcon />}
                    onClick={handleLogin}
                    variant="outlined"
                  >
                    Login
                  </Button>
                ) : (
                  <Avatar
                    onClick={accountPopover.handleOpen}
                    ref={accountPopover.anchorRef}
                    sx={{
                      cursor: "pointer",
                      height: 40,
                      width: 40,
                    }}
                    src={""}
                  />
                )}
              </Stack>
            </Stack>
          </Box>
          <AccountPopover
            anchorEl={accountPopover.anchorRef.current}
            open={accountPopover.open}
            onClose={accountPopover.handleClose}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Packages = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography textAlign="center" variant="h4" gutterBottom>
        Subscribe To Keyword Alpha Pro Right Now
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Card
          sx={{
            backgroundColor: theme.palette.grey[100],
            width: { xs: "100%", md: 450 },
            my: 2,
          }}
        >
          <CardContent>
            <Typography textAlign="left" variant="h5" gutterBottom>
              Pro Plus 79$ Month
            </Typography>
            <Typography textAlign="left" variant="body1" gutterBottom>
              billed every 12 month
            </Typography>
            <Button sx={{ my: 1 }} fullWidth variant="contained">
              Subscribe Now
            </Button>
            <Divider sx={{ my: 2 }} orientation="horizontal" />
            {[
              { text: "Search Volume Data" },
              { text: "Cost-Per-Click Data" },
              { text: "Competition Data" },
              { text: "2 Times More Keywords" },
              { text: "Bulk Search Volume Analysis" },
              { text: "5 User Accounts" },
            ]?.map((item) => (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={item?.text} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </CardContent>
        </Card>
        <Card
          sx={{
            backgroundColor: theme.palette.grey[100],
            width: { xs: "100%", md: 450 },
            my: 2,
          }}
        >
          <CardContent>
            <Typography textAlign="left" variant="h5" gutterBottom>
              Pro Plus 79$ Month
            </Typography>
            <Typography textAlign="left" variant="body1" gutterBottom>
              billed every 12 month
            </Typography>
            <Button sx={{ my: 1 }} fullWidth variant="contained">
              Subscribe Now
            </Button>
            <Divider sx={{ my: 2 }} orientation="horizontal" />
            {[
              { text: "Search Volume Data" },
              { text: "Cost-Per-Click Data" },
              { text: "Competition Data" },
              { text: "2 Times More Keywords" },
              { text: "Bulk Search Volume Analysis" },
              { text: "5 User Accounts" },
            ]?.map((item) => (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={item?.text} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Packages;

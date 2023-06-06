import { CssBaseline, } from "@mui/material";
import { createTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import RouterProvide from "./services/ClientRoutes";

function App() {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvide />
    </ThemeProvider>
  );
}

export default App;

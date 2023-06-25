import { CssBaseline, } from "@mui/material";
import { createTheme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import RouterProvide from "./services/ClientRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvide />
    </ThemeProvider>
  );
}

export default App;

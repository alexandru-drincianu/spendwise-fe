import { FC } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const App: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d1cd00",
      },
      secondary: {
        main: "#b5b45c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;

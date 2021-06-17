import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../utils/themes";
import { GlobalStyles } from "../utils/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import MovieSite from "./MovieSite";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter basename="/">
        <GlobalStyles />
          <MovieSite theme={theme} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

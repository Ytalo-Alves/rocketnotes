import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Details } from "./pages/details";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from './styles/global'
import { Home } from "./pages/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home />
    </ThemeProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Details } from "./pages/details";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from './styles/global'
import { Home } from "./pages/home";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Profile } from "./pages/profile";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Profile />
    </ThemeProvider>
  </StrictMode>
);

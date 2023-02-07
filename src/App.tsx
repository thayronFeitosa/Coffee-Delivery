import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CardContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
      <CartContextProvider>
        <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

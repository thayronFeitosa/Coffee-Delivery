import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { OrderCoffeeContextProvider } from "./context/OrderCoffeeContext";


export function App() {
  function handleClick() {
    console.log("clicando");
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
        <OrderCoffeeContextProvider>
          <Router />
        </OrderCoffeeContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

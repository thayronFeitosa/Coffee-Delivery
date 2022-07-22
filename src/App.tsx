import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";

export function App() {
  function handleClick() {
    console.log("clicando");
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter >
        <Header />
        <div className="App">
          <h1>hello word</h1>
          <Button onClick={handleClick}>Label</Button>
          <Input placeholder="sadfas" />
        </div>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

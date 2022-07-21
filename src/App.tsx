import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  function handleClick() {
    console.log('clicando');
    
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>hello word</h1>
        <Button onClick={handleClick}>Label</Button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.scss";
import logo from "./logo.svg";
import { DarkTheme, LightTheme } from "./themes";

const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
`;

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(DarkTheme);

  const toggleTheme = () => {
    if (theme === DarkTheme) {
      setTheme(LightTheme);
    } else {
      setTheme(DarkTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </Button>
            <Button type="button" onClick={() => toggleTheme()}>
              toggle theme
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            {" | "}
            <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

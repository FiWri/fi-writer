import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { Root } from "./pages/Root";
import { DarkTheme, LightTheme } from "./themes";

function App() {
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
      <ModalProvider>
        <Root toggleTheme={toggleTheme} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

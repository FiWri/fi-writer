import { Route, Routes } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "theme-ui";
import { useTheme } from "./themes/useTheme";
import { Home, Root } from "./views";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

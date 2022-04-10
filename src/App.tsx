import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "theme-ui";
import { Root } from "./pages/Root";
import { theme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Root />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

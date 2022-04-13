/** @jsxImportSource theme-ui */

import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "theme-ui";
import { StoryViewer } from "./story-viewer";
import { useTheme } from "./themes/useTheme";
import { Home, Root } from "./views";

const AppWrapper: FC = (props) => (
  <div
    sx={{
      width: "100vw",
      height: "100vh",
    }}
    {...props}
  ></div>
);
function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/home" element={<Home />} />
            <Route path="/story-viewer" element={<StoryViewer />} />
          </Routes>
        </AppWrapper>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

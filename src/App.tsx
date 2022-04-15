/** @jsxImportSource theme-ui */

import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'theme-ui';
import { NotFound } from './components';
import { Home } from './features/home';
import { StoryViewer } from './features/story-viewer';
import { StoryWriter } from './features/story-writer';
import { useTheme } from './themes/useTheme';

const AppWrapper: FC = (props) => (
  <div
    sx={{
      width: '100vw',
      height: '100vh',
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
            <Route path="/" element={<Home />} />
            <Route path="/story-viewer" element={<StoryViewer />} />
            <Route path="/story-writer" element={<StoryWriter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;

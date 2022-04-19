/** @jsxImportSource theme-ui */

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { FC } from 'react';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'theme-ui';
import { Router } from './Router';
import { useTheme } from './themes/useTheme';
import { messages } from './locales/en/messages';

const AppWrapper: FC = (props) => (
  <div
    sx={{
      width: '100vw',
      height: '100vh',
    }}
    {...props}
  ></div>
);
export const App = () => {
  const { theme } = useTheme();

  i18n.load('en', messages);
  i18n.activate('en');

  return (
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <AppWrapper>
            <Router />
          </AppWrapper>
        </ModalProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};

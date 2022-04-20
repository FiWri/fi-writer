/** @jsxImportSource theme-ui */

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { de, en, fr } from 'make-plural/plurals';
import { FC } from 'react';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'theme-ui';
import { useTheme } from './features/themes';
import { deMessages, enMessages, frMessages, Locales } from './locales';
import { Router } from './Router';

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

  i18n.loadLocaleData({
    de: { plurals: de },
    en: { plurals: en },
    fr: { plurals: fr },
  });
  i18n.load({
    de: deMessages,
    en: enMessages,
    fr: frMessages,
  });
  i18n.activate(Locales.en);

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

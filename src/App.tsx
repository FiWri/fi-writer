import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { de, en, fr } from 'make-plural/plurals';
import { FC } from 'react';
import { ModalProvider } from 'styled-react-modal';
import { Box, ThemeProvider } from 'theme-ui';

import { useTheme } from '~/hooks';
import { deMessages, enMessages, frMessages, Locales } from '~/locales';
import { Router } from '~/Router';

const AppWrapper: FC = (props) => (
  <Box
    sx={{
      width: '100vw',
      height: '100vh',
      variant: 'customScrollbar.default', // theme-ui doesn't support multiple variants yet, we'll see in the future
    }}
    {...props}
  />
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
        <AppWrapper>
          <ModalProvider>
            <Router />
          </ModalProvider>
        </AppWrapper>
      </ThemeProvider>
    </I18nProvider>
  );
};

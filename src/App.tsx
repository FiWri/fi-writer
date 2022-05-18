import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { ColorModeProvider } from '@theme-ui/color-modes';
import { Box } from '@theme-ui/components';
import { ThemeProvider } from '@theme-ui/core';
import { de, en, fr } from 'make-plural/plurals';
import { FC } from 'react';

import { useTheme } from '~/hooks';
import { deMessages, enMessages, FiwriLocales, frMessages } from '~/locales';
import { Router } from '~/Router';
import { useServiceWorkerPrompt } from '~/service-workers/useServiceWorkerPrompt';

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
  useServiceWorkerPrompt();

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
  i18n.activate(FiwriLocales.en);

  return (
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AppWrapper>
            <Router />
          </AppWrapper>
        </ColorModeProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};

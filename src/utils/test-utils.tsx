/* eslint-disable react/display-name */
/* eslint-disable import/export */
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { render } from '@testing-library/react';
import { ColorModeProvider } from '@theme-ui/color-modes';
import { ThemeProvider } from '@theme-ui/core';
import { de, en, fr } from 'make-plural';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useTheme } from '~/hooks';
import { deMessages, enMessages, frMessages, Locales } from '~/locales';

const I18n = ({ children }: { children: ReactElement }) => {
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
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

const Router = ({ children }: { children: ReactElement }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const Theme = ({ children }: { children: ReactElement }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
};

export enum RenderWith {
  ALL = 'all',
  I18N = 'i18n',
  NONE = 'none',
  ROUTER = 'router',
  THEME = 'theme',
}

const customRender = (
  ui: React.ReactElement,
  renderWith?: RenderWith,
  options = {}
) => {
  let Wrapper = ({ children }: { children: ReactElement }) => children;

  // we wrap the component with the necessary providers here if needed
  // TODO: find a way to compose with different providers in a nicer way
  switch (renderWith) {
    case RenderWith.ALL:
      Wrapper = ({ children }: { children: ReactElement }) => (
        <Router>
          <Theme>
            <I18n>{children}</I18n>
          </Theme>
        </Router>
      );
      break;
    case RenderWith.I18N:
      Wrapper = ({ children }: { children: ReactElement }) => (
        <I18n>{children}</I18n>
      );
      break;
    case RenderWith.ROUTER:
      Wrapper = ({ children }: { children: ReactElement }) => (
        <Router>{children}</Router>
      );
      break;
    case RenderWith.THEME:
      Wrapper = ({ children }: { children: ReactElement }) => (
        <Theme>{children}</Theme>
      );
      break;
    case RenderWith.NONE:
    default:
      break;
  }

  return render(ui, {
    wrapper: Wrapper,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };

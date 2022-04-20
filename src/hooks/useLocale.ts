import { i18n } from '@lingui/core';
import { Locales } from '../locales';

export const useLocale = () => {
  const switchLocale = () => {
    const locales = Object.values(Locales);
    const currentLocale = i18n.locale as Locales;
    const currentLocaleIndex = locales.findIndex(
      (locale) => currentLocale === locale
    );
    if (currentLocaleIndex === locales.length - 1) {
      i18n.activate(locales[0]);
    } else {
      i18n.activate(locales[currentLocaleIndex + 1]);
    }
  };

  return { switchLocale };
};

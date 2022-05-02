import { Theme, ThemeUICSSObject } from 'theme-ui';

export type Variants = Pick<
  Theme,
  'messages' | 'alerts' | 'badges' | 'links' | 'buttons' | 'forms' | 'cards'
> & {
  customBorder: {
    default: ThemeUICSSObject;
  };
  customScrollbar: {
    default: ThemeUICSSObject;
  };
};

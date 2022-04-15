import { Theme } from 'theme-ui';
import { alerts } from './fiwri/alerts';
import { badges } from './fiwri/badges';
import { borders } from './fiwri/borders';
import { buttons } from './fiwri/buttons';
import { cards } from './fiwri/cards';
import { colors } from './fiwri/colors';
import { fonts } from './fiwri/fonts';
import { forms } from './fiwri/forms';
import { links } from './fiwri/links';
import { messages } from './fiwri/messages';
import { styles } from './fiwri/styles';

/**
 * This style is heavily inspired by Sketchy from theme-ui: https://github.com/system-ui/theme-ui/tree/develop/packages/preset-sketchy
 */
export const fiwri: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  alerts,
  badges,
  ...borders,
  buttons,
  cards,
  colors,
  ...fonts,
  forms,
  links,
  messages,
  shadows: {
    outline: '0 0 0px 1px black rgba(0,0,0,.4)',
    default: '15px 24px 25px -18px rgba(0,0,0,.4)',
    hover: '2px 8px 10px -6px rgba(0,0,0,.4)',
  },
  sizes: {
    container: 800, // default size for the Container component
  },
  styles,
};

/**
 * // TODO: check if there is a cleaner way to share styles in theme-ui/react
 * re-export border styles to allow its use in other components
 */
export { defaultBorderStyles } from './fiwri/borders';

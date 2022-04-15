import type { ThemeUICSSObject } from 'theme-ui';
import { defaultBorderStyles } from './borders';

const buttonStyles: ThemeUICSSObject = {
  ...defaultBorderStyles,
  transition: 'all 250ms ease',
  bg: 'muted',
  boxShadow: 'default',
  fontFamily: 'inherit',
  '&:hover': {
    bg: 'primary',
    boxShadow: 'hover',
  },
};
const secondaryButtonStyles: ThemeUICSSObject = {
  ...defaultBorderStyles,
  transition: 'all 250ms ease',
  bg: 'secondary',
  boxShadow: 'default',
  fontFamily: 'inherit',
  '&:hover': {
    bg: 'primaryLight',
    boxShadow: 'hover',
  },
};

export const buttons = {
  primary: buttonStyles,
  secondary: secondaryButtonStyles,
  danger: {
    ...buttonStyles,
    borderColor: 'primary',
    backgroundColor: 'primaryLight',
  },
  info: {
    ...buttonStyles,
    borderColor: 'blueDark',
    backgroundColor: 'blue',
  },
  warning: {
    ...buttonStyles,
    borderColor: 'yellowDark',
    backgroundColor: 'yellow',
  },
  success: {
    ...buttonStyles,
    borderColor: 'greenDark',
    backgroundColor: 'green',
  },
};
